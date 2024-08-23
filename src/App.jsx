import { useState } from 'react'
import './App.css'
import TaskList from './components/TasksList/TaskList'
import TaskForm from './components/TaskForm/TaskForm'
import FilterTask from './components/FilterTask/FilterTask'
import SearchTask from './components/SearchTask/SearchTask'

function App() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [sortBy, setSortBy] = useState("Asc")
  const [tasks, setTasks] = useState([])

  const addTask = (text, category) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      }
    ]
    setTasks(newTasks)
  }

  const removeTask = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter(tasks => tasks.id !== id ? tasks : null)

    setTasks(filteredTasks)
  }
  const completeTask = (id) => {
    const newTasks = [...tasks]

    newTasks.map((tasks) => tasks.id === id ? tasks.isCompleted = !tasks.isCompleted : tasks)
    setTasks(newTasks)
    console.log(newTasks)
  }

  return (
    <div className='container'>
      <h1>To do List</h1>

      <SearchTask search={search} setSearch={setSearch} />

      <FilterTask filter={filter} setFilter={setFilter} setSortBy={setSortBy} />
      {tasks
        .filter((tasks) =>
          filter === "All"
            ? true : filter === "Completed"
              ? tasks.isCompleted : !tasks.isCompleted)
        .filter((tasks) => tasks.text.toLowerCase().includes(search.toLocaleLowerCase()))
        .sort((a, b) => sortBy === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text))
        .map((task) => (
          <TaskList key={task.id} task={task} removeTask={removeTask} completeTask={completeTask} />
        ))}
      <TaskForm addTask={addTask} />
    </div>
  )
}

export default App
