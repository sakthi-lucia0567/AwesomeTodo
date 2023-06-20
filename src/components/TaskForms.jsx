import React from "react";
import { useState } from "react";

function TaskForms() {
  const [task, setTask] = useState("");
  return (
    <form action="#">
      <button>+</button>
      <input
        type="text"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
        name="task"
        id="task"
        placeholder="New Task"
      />
    </form>
  );
}

export default TaskForms;
