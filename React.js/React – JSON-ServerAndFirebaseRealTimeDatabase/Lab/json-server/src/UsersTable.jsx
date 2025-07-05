import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const API_URL = "http://localhost:3000/users";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  const handleAdd = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  // Delete user
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  // Start editing
  const handleEdit = (user) => {
    setEditId(user.id);
    setForm({ name: user.name, email: user.email });
  };

  // Update user (PUT)
  const handleUpdate = async (e) => {
    e.preventDefault();
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id: editId }),
    });
    setEditId(null);
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  // Patch user (only name)
  const handlePatch = async (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h2 className="mb-4">Users Table</h2>
      </div>
      <form onSubmit={editId ? handleUpdate : handleAdd} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="form-control mb-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="form-control mb-2"
          required
        />

        <button
          type="submit"
          className="form-control btn btn-outline-dark mb-2"
        >
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button
            type="button"
            className="form-control btn btn-outline-dark mb-2"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <table
        border="1"
        cellPadding="8"
        style={{ marginTop: 20, width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => handleEdit(user)}
                  className="btn btn-outline-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-outline-danger ms-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handlePatch(user.id)}
                  className="btn btn-outline-dark ms-2"
                >
                  Patch Name
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
