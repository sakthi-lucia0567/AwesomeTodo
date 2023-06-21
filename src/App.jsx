import { useEffect, useState } from "react";
import "./App.css";
import TaskForms from "./components/TaskForms";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => [...prev, { name: name, done: false }]);
  }
  return (
    <>
      <main>
        <TaskForms onAdd={addTask} />
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </main>
    </>
  );
}

export default App;
