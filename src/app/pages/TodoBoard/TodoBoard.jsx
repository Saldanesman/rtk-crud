import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import TaskCard from "../../components/TaskCard/TaskCard";
import './TodoBoard.scss';


const TodoBoard = () => {
  const tasks = useSelector(state => state.tasks)
  const [title, setTitle] = useState('TO DO Board');
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [locked, setLocked] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    tasks.forEach(task => {
      if (task.column === 'todo') setTodo(oldArray => [...oldArray, task]);
      if (task.column === 'inProgress') setInProgress(oldArray => [...oldArray, task]);
      if (task.column === 'locked') setLocked(oldArray => [...oldArray, task]);
      if (task.column === 'done') setDone(oldArray => [...oldArray, task]);
    })
  }, [tasks]);

  const toggleTitle = (title) => {
    if (title === 'To do Board') setTitle('Done Board');
    else setTitle('To do Board');
  };
  
  return (
    <div className={'tb-c-dashboard'}>
      <div className={'tb-c-dashboard__header'}>
        <h1 className={'tb-c-dashboard__header__title'}> {title} </h1>
      </div>
      <div className={'tb-c-dashboard__columns'}>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> To do </h1>
          {[...new Set(todo)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task}/>
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> In Progress </h1>
          {[...new Set(inProgress)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task}/>
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> Locked </h1>
          {[...new Set(locked)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task}/>
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <h1 className={'tb-c-dashboard__columns__column__title'}> Done </h1>
          {[...new Set(done)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default TodoBoard;