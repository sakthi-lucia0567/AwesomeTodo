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

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }
  return (
    <>
      <main>
        <TaskForms onAdd={addTask} />
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            {...task}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
