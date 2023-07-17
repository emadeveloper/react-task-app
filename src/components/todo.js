import { useState } from "react";

export default function ToDo({ item, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false);
  function FormEdit() {
    const [value, setValue] = useState(item.title);
    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setValue(value);
    }
    function handleClickUpdateToDo() {
      onUpdate(item.id, value);
      setEdit(false);
    }

    return (
      <form className="to-do-update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="to-do-input-update"
          onChange={handleChange}
          value={value}
        />
        <button className="button" onClick={handleClickUpdateToDo}>
          Actualizar tarea
        </button>
      </form>
    );
  }

  function ToDoElement() {
    return (
      <div className="to-do-info">
        <span className="to-do-title">{item.title}</span>
        <button className="button" onClick={() => setEdit(true)}>
          Edit
        </button>
        <button className="button-delete" onClick={(e) => onDelete(item.id)}>
          Delete
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="to-do">{edit ? <FormEdit /> : <ToDoElement />}</div>
    </>
  );
}
