import { useState } from "react";
import "./App.css";
import TaskForms from "./components/TaskForms";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(name) {
    setTasks((prev) => [...prev, { name: name, done: false }]);
  }
  return (
    <>
      <main>
        <TaskForms onAdd={addTask} />
        {tasks.map((task) => {
          <Task />;
        })}
      </main>
    </>
  );
}

export default App;
