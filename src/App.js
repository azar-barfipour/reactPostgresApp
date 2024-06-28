import React from "react";
import "./App.css";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React PostgreSQL App</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
