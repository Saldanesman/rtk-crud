import React, { useState } from "react";
import { useSelector } from 'react-redux'
import TaskCard from "../../components/TaskCard/TaskCard";
import './TodoBoard.scss';


const TodoBoard = () => {
  const tasks = useSelector(state => state.tasks)
  const [title, setTitle] = useState('TO DO Board');

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
          {tasks.map((task) => {
            return <TaskCard key={task.id} taskInfo={task}/>;
          })}
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          B
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          C
        </div>
        <div className={'tb-c-dashboard__columns__column'}>
          D
        </div>
      </div>
    </div>
  )
}

export default TodoBoard;