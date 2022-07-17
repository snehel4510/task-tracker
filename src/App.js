import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false);

  // fetch tasks from db.json
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    return data;
  }

  // fetch a task to toggle the reminder
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  }

  

  // Add task
  const addTask = async (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const text = task.text;
    const day = `${task.date} at ${task.time}`;
    const reminder = task.reminder;
    const newTask = { id, text, day, reminder };
    
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    const data = await response.json();
    setTasks([...tasks, data]);
  }

  // delete task
  const deleteTask = async (id) => {
    // console.log('delete', id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    // console.log(id);
    const task = await fetchTask(id);
    const updTask = { ...task, reminder: !task.reminder };

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    setTasks(tasks.map((task) => task.id === id ? updTask : task))
    // setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header show={show} onAdd={() => setShow(!show)} />
        {/* <Routes>
          <Route path='/'
            element={
              <>
                {show && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Tasks To Show')}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes> */}
        <switch>
          <Route path="/">
            {show && <AddTask onAdd={addTask} />}
            {
              tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : <h4>No tasks to show</h4>
            }
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
