import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // This is where we'll fetch users from the database later
    setUsers([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ]);
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
