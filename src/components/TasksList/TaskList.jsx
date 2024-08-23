import React from 'react'

const TaskList = ({ task, removeTask,completeTask }) => {
    return (
        <div className="task-group" >
            <div className="task-box">
                <p className="text-box" style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
                    <span >{task.text}</span>
                    <span>({task.category})</span>
                </p>
                <div className="button-box-task">
                    <button onClick={() => completeTask(task.id)}>Complete</button>
                    <button onClick={() => removeTask(task.id)}>X</button>
                </div>
                
            </div>
        </div>
    )
}

export default TaskList