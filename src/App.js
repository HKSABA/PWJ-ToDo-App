import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";

function App() {
  // React way of writing a variable...
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addATodo = (event) => {
    event.preventDefault();
    setTodos([inputText, ...todos]);
    setInputText("");
  };

  return (
    <div className="app">
      <h1>To-do App</h1>

      <div className="app__input">
        <form>
          <input
            id="input"
            value={inputText}
            placeholder="Write a todo..."
            onChange={(event) => setInputText(event.target.value)}
            type="text"
          />

          <Button
            id="input__button"
            variant="contained"
            color="black"
            size="small"
            disabled={!inputText}
            onClick={addATodo}
            type="submit"
          >
            ADD A TODO
          </Button>
        </form>
      </div>

      <div className="list__container">
        {todos.map((todo) => (
          <div className="list">
            <Todo text={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
