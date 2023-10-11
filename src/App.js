import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      day: 'Feb 5th 2023',
      reminder: true
    },
    {
      id: 2,
      text: 'Task 2',
      day: 'Jan 9th 2023',
      reminder: false
    },
    {
      id: 3,
      text: 'Task 3',
      day: 'May 12th 2023',
      reminder: false
    },
  ])

  const [showAddTask, setShowAddTask] = useState(false)

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10) + 3

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
  }

  //Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder }
      : task
    ))
  }

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}         
      />
      {showAddTask && <AddTask
        onAdd={addTask}
      />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>

  );
}

export default App;
