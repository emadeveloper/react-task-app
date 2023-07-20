import { useState } from "react";
import React from "react";

const ToDo = ({ item, onUpdate, onDelete }) => {
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
        <button className="button-update" onClick={handleClickUpdateToDo}>
          Actualizar
        </button>
      </form>
    );
  }

  function ToDoElement() {
    const [isComplete, setIsComplete] = useState(false);

    const onTaskComplete = () => {
      setIsComplete(true);
      if (isComplete) {
        setIsComplete(false);

      }
    };

    return (
      <>
      <div className={`to-do-info ${isComplete ? "completed" : ""}`}>
        <span className="to-do-title">{item.title}</span>
      </div>
      <div className="to-do-info">
        <button className="button" onClick={() => setEdit(true)}>
          Editar Tarea
        </button>
        <button className="button-delete" onClick={() => onDelete(item.id)}>
          Borrar Tarea
        </button>
        <button className="button-complete" onClick={onTaskComplete}>
          Tarea Completada
        </button>
      </div>
      </>
    );
  }

  return (
    <>
      <div className="to-do">{edit ? <FormEdit /> : <ToDoElement />}</div>
    </>
  );
};

export default ToDo;