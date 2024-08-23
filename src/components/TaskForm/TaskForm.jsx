import { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return
        addTask(title, category)
        setTitle("")
        setCategory("")
    }   

    return (
        <div className="createTask-box">
            <h2>Create a task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder='Enter a task name' onChange={(e) => setTitle(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default TaskForm