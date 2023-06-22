import { useEffect, useState, useRef } from "react";
import "./App.css";
import TaskForms from "./components/TaskForms";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      if (!prev || !(Symbol.iterator in Object(prev))) {
        prev = [];
      }
      return [...prev, { name: name, done: false }];
    });
  }

  // function removeTask(taskIndex) {
  //   setTasks((prev) => {
  //     return prev.filter((task, index) => index !== taskIndex);
  //   });
  // }

  function removeTask(taskIndex) {
    setTasks((prev) => {
      const updatedTasks = prev.filter((task, index) => index !== taskIndex);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask[index].name = newName;
      return newTask;
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  //const numCompleted = tasks.filter((task) => task.done).length;
  const numCompleted = tasks ? tasks.filter((task) => task.done).length : 0;
  const numTotal = tasks ? tasks.length : 0;

  function getMessage() {
    const percentCompleted = (numCompleted / numTotal) * 100;
    if (percentCompleted === 0) return "Don't forget to start 😊";
    if (percentCompleted >= 30 && percentCompleted <= 70)
      return "You're halfway there, keep pushing 👍";
    if (percentCompleted === 100) return "Yay, you're done! 😎";
    return "Hey Don't Forget to Write Tasks✌️😉";
  }

  return (
    <>
      <main>
        {numTotal > 0 && (
          <h2>
            {numCompleted}/{numTotal} Complete
          </h2>
        )}
        <h3>{getMessage()}</h3>
        <TaskForms onAdd={addTask} />
        {tasks &&
          tasks.map((task, index) => (
            <Task
              key={index}
              {...task}
              setName={(newName) => renameTask(index, newName)}
              onToggle={(done) => updateTaskDone(index, done)}
              onDelete={() => removeTask(index)}
            />
          ))}
      </main>
    </>
  );
}

export default App;
