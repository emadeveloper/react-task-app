import { useState } from "react";
import ToDo from "./todo";
import "./todoapp.css";

export default function ToDoApp() {
  const [toDoList, setToDoList] = useState([]);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      alert("No agregaste ninguna tarea");
    } else {
      const newTask = {
        title: title.toLowerCase(),
        id: Date.now(),
        completed: false,
      };
      const temp = [...toDoList];
      temp.unshift(newTask);
      setToDoList(temp);
      setTitle("");
    }
    if (toDoList.some((item) => item.title.toLowerCase() === title.toLowerCase())) {
      alert("Ya agregaste esta tarea");
    }
  }

  function handleUpdate(id, value) {
    const temp = [...toDoList];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDoList(temp);
  }

  function handleDelete(id) {
    const temp = toDoList.filter((item) => item.id !== id);
    setToDoList(temp);
  }

  return (
    <div className="to-do-container">
      <form className="to-do-create-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="to-do-input"
          value={title}
          placeholder="Agrega tareas aqui..."
        />
        <input
          onClick={handleSubmit}
          type="submit"
          className="button-create"
          value="Crear tarea"
        />
      </form>

      <div className="to-dos-container">
        {toDoList.map((item) => (
          <ToDo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
