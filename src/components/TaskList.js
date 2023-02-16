import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../features/tasks/taskSlice'

const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch(state => state.dispatch);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>
            delete
          </button>
          <Link to={`/edit-task/${task.id}`}> Edit </Link>
        </div>
      ))}
    </div>
  )
}

export default TaskList