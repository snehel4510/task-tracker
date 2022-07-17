import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Meeting at office",
      "day": "Feb 7th at 3:30pm",
      "reminder": true
    },
    {
      "id": 4,
      "text": "Meeting at college",
      "day": "Feb 8th at 2:30pm",
      "reminder": true
    },
    {
      "id": 5,
      "text": "Opening the bank account",
      "day": "Apr 15th at 8:00am",
      "reminder": true
    }
  ])

  const [show, setShow] = useState(false);

  // Add task
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const text = task.text;
    const day = `${task.date} at ${task.time}`;
    const reminder = task.reminder;
    const newTask = { id, text, day, reminder };
    setTasks([...tasks, newTask]);
  }

  // delete task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header show={show} onAdd={() => setShow(!show)} />
      {show && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : <h6>No tasks to show</h6>
      }
    </div>
  );
}

export default App;
