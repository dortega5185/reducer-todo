import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    </div>
  );
};

export default App;
