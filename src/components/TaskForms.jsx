import React from "react";
import { useState } from "react";

function TaskForms({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    console.log("hello");
    console.log("oooook", taskName);
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        name="task"
        id="task"
        placeholder="New Task"
      />
    </form>
  );
}

export default TaskForms;
