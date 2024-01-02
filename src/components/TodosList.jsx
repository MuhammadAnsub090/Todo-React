import React from "react";

const TodosList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({id}) => { 
        setTodos(todos.filter((todos) => todos.id !== id));
    };

    const handleEdit = ({id}) => {
      const findTodo = todos.find((todos) => todos.id === id);
      setEditTodo(findTodo);
    }
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list-item "
            onChange={(event) =>
              setTodos((prevTodos) =>
                prevTodos.map((prevTodo) =>
                  prevTodo.id === todo.id
                    ? { ...prevTodo, title: event.target.value }
                    : prevTodo
                )
              )
            }
          />

          <div>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button> 
            <button
              className="button-edit task-button"
              onClick={() => editBtn(todo)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
