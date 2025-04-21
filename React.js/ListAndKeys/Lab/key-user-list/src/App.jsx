import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  // the array of users
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" },
  ];
  users.sort((a, b) => a.name.localeCompare(b.name)); // Sort the users by name

  // The key prop is used to give each list item a unique identifier
  const userList = users.map((user) => (
    <li key={user.id} className="list-group-item">
      {user.name}
    </li>
  ));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">User List</h1>
      <ol className="list-group">{userList}</ol>
    </div>
  );
};

export default App;
