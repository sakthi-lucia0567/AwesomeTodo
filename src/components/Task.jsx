import React from "react";
import CheckBox from "./CheckBox";

function Task() {
  return (
    <div className="task">
      <CheckBox defaultChecked={true} />
      test task
    </div>
  );
}

export default Task;
