import React, { useState, useRef, useEffect } from "react";
import CheckBox from "./CheckBox";

/**
+ * Render a task component.
+ *
+ * @param {object} name - The name of the task.
+ * @param {boolean} done - Indicates if the task is completed.
+ * @returns {JSX.Element} A React component representing a task.
+ 
**/

function Task({ name, done, onToggle, onDelete, setName }, formRef) {
  const [editTask, setEditTask] = useState(false);

  return (
    <div className={"task " + (done ? " done" : "")}>
      <CheckBox isChecked={done} onClick={() => onToggle(!done)} />
      {!editTask && (
        <div onClick={() => setEditTask((prev) => !prev)}>{name}</div>
      )}
      {editTask && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditTask(false);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </form>
      )}
      <button className="delete" onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
    </div>
  );
}

export default Task;
