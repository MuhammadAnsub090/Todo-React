import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todos) => {
      todos.id === id ? { title, id, completed } : todos;
    });
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() =>{
    if(editTodo){
      setInput(editTodo.title)
    }else{
      setInput("");
    }
  }, [setInput, editTodo]);

  
  const onFormsubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  const onIputchange = (event) => {
setInput(event.target.value);
};
  return (
    <form onSubmit={onFormsubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        className="task-input"
        value={input}
        required
        onChange={onIputchange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
