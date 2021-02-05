import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'feb 5 at 3',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dev meeting',
        day: 'feb 7 at 4',
        reminder: true,
    },
    {
        id: 3,
        text: 'Drinks',
        day: 'feb 9 at 7',
        reminder: true,
    }
])

const addTask = (task) => {
  const id = Math.floor(Math.random() *10000) + 1
  const newTask = { id, ...task }
  setTasks ([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: 
      !task.reminder} : task
      )
    )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} 
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      />
       ) : ( 'No Tasks to Show' )}
    </div>
  );
}

export default App;
