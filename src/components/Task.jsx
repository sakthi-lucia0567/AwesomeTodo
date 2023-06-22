import React from "react";
import CheckBox from "./CheckBox";

/**
+ * Render a task component.
+ *
+ * @param {object} name - The name of the task.
+ * @param {boolean} done - Indicates if the task is completed.
+ * @returns {JSX.Element} A React component representing a task.
+ */

function Task({ name, done }) {
  return (
    <div className="task">
      <CheckBox defaultChecked={done} />
      {name}
    </div>
  );
}

export default Task;
