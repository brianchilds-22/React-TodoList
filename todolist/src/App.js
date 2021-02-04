import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"


const App = () => {
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

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
