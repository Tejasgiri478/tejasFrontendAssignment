import { useState, useEffect } from "react";
import { addItem, getItems, updateItem, deleteItem } from "../firebase";

function ItemCrud() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItem, setNewItem] = useState({ title: "", description: "" });
  const [editItem, setEditItem] = useState(null);
  const [error, setError] = useState("");

  const collectionName = "items";

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const fetchedItems = await getItems(collectionName);
      setItems(fetchedItems);
      setError("");
    } catch (error) {
      setError("Error fetching items: " + error.message);
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditItem({ ...editItem, [name]: value });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setLoading(true);
      const timestamp = new Date();
      await addItem(collectionName, { ...newItem, createdAt: timestamp });
      setNewItem({ title: "", description: "" });
      fetchItems();
      setError("");
    } catch (error) {
      setError("Error adding item: " + error.message);
      console.error("Error adding item:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (item) => {
    setEditItem(item);
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (!editItem.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setLoading(true);
      const timestamp = new Date();
      const { id, ...itemData } = editItem;
      await updateItem(collectionName, id, {
        ...itemData,
        updatedAt: timestamp,
      });
      setEditItem(null);
      fetchItems();
      setError("");
    } catch (error) {
      setError("Error updating item: " + error.message);
      console.error("Error updating item:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        setLoading(true);
        await deleteItem(collectionName, id);
        fetchItems();
        setError("");
      } catch (error) {
        setError("Error deleting item: " + error.message);
        console.error("Error deleting item:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditItem(null);
    setError("");
  };

  if (loading && items.length === 0) {
    return <div>Loading items...</div>;
  }

  return (
    <div className="item-crud-container">
      <h2>Item Management</h2>

      {error && <div className="error-message">{error}</div>}

      {/* Add Item Form */}
      <div className="add-item-form">
        <h3>Add New Item</h3>
        <form onSubmit={handleAddItem}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newItem.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={newItem.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>

      {/* Edit Item Form */}
      {editItem && (
        <div className="edit-item-form">
          <h3>Edit Item</h3>
          <form onSubmit={handleUpdateItem}>
            <div className="form-group">
              <label htmlFor="edit-title">Title:</label>
              <input
                type="text"
                id="edit-title"
                name="title"
                value={editItem.title}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="edit-description">Description:</label>
              <textarea
                id="edit-description"
                name="description"
                value={editItem.description}
                onChange={handleEditInputChange}
              />
            </div>
            <div className="form-actions">
              <button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Item"}
              </button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Items List */}
      <div className="items-list">
        <h3>Items List</h3>
        {items.length === 0 ? (
          <p>No items found. Add some items to get started!</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="item-card">
                <div className="item-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                  <button onClick={() => handleDeleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ItemCrud;
