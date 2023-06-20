import { useState } from "react";
import "./App.css";
import TaskForms from "./components/TaskForms";
import Task from "./components/Task";
function App() {
  return (
    <>
      <div>
        <TaskForms />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}

export default App;
