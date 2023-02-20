import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import NewTask from "../../components/NewTask/NewTask";
import TaskCard from "../../components/TaskCard/TaskCard";

import './TodoBoard.scss';


const TodoBoard = (props) => {
  const tasks = useSelector(state => state.tasks)
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

  return (
    <div className={'tb-c-dashboard'}>
      <div className={'tb-c-dashboard__header'}>
        <h1 className={'tb-c-dashboard__header__title'}> TO DO Board </h1>
      </div>
      <div className={'tb-c-dashboard__columns'}>
        <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
            <h1 className={'tb-c-dashboard__columns__column__head__title'}> To do </h1>
            <NewTask column={'todo'} createModal={props.createModal} />
          </div>
          {[...new Set(todo)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task} editModal={props.editModal} />
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
            <h1 className={'tb-c-dashboard__columns__column__head__title'}> In Progress </h1>
            <NewTask column={'inProgress'} createModal={props.createModal} />
          </div>
          {[...new Set(inProgress)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task} editModal={props.editModal}/>
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
            <h1 className={'tb-c-dashboard__columns__column__head__title'}> Locked </h1>
            <NewTask column={'locked'} createModal={props.createModal}/>
          </div>
          {[...new Set(locked)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task} editModal={props.editModal}/>
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          <div className={'tb-c-dashboard__columns__column__head'}>
            <h1 className={'tb-c-dashboard__columns__column__head__title'}> Done </h1>
            <NewTask column={'done'} createModal={props.createModal}/>
          </div>
          {[...new Set(done)].map((task) => {
            return <TaskCard key={task.id} taskInfo={task} editModal={props.editModal}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default TodoBoard;