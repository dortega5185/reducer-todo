import React, { useState, useReducer } from "react";
import { initialState, reducerTodo } from "../reducers/SimpleReducer";
import { Todo } from "../components/Todo";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducerTodo, initialState);

  const [todo, setTodo] = useState("");

  const handleChanges = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_DEFAULT", payload: todo });
  };

  return (
    <div>
      <form>
        <label htmlFor="todo">
          Add to your list...
          <input
            type="text"
            placeholder="Type item here"
            name="toDoText"
            value={todo}
            onChange={handleChanges}
          />
          <button className="add-btn" onClick={handleSubmit}>
            Add
          </button>
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Default
          </button>
        </label>
      </form>
      <div>
        {state.map((item) => (
          <Todo state={item} dispatch={dispatch} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
