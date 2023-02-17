import React from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../../redux/features/tasks/taskSlice';

//icons
import {ReactComponent as LowPriority} from '../../../assets/images/low-priority.svg';
import {ReactComponent as MediumPriority} from '../../../assets/images/medium-priority.svg';
import {ReactComponent as HighPriority} from '../../../assets/images/high-priority.svg';

import './TaskCard.scss';
import ModalForm from "../ModalForm/ModalForm";


const TaskCard = (props) => {
  const dispatch = useDispatch(state => state.dispatch)

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className={'tb-c-task'}>
      <Link className={'tb-c-task__title'} to={`/edit-task/${props.taskInfo?.id}`}> 
        {props.taskInfo?.title} 
      </Link>
      <ModalForm editModal={props.editModal} />
      <div className={'tb-c-task__content'}>
        <div className={'tb-c-task__content__dates'}>
          <p className={'tb-c-task__content__dates__date'}> 
            Created: {props.taskInfo?.created} 
          </p>
          <p className={'tb-c-task__content__dates__date'}> 
            Deadline: {props.taskInfo?.deadline} 
          </p>
        </div>
        <div className={'tb-c-task__content__icons'}>
          <p className={'tb-c-task__content__icons__type'}> 
            {props.taskInfo?.type} 
            </p>
          <div className={'tb-c-task__content__icons__priority'}> 
            {props.taskInfo?.priority === 'high' && <HighPriority />}
            {props.taskInfo?.priority === 'medium' && <MediumPriority />}
            {props.taskInfo?.priority === 'low' && <LowPriority />}
          </div>
        </div>
        <button onClick={() => handleDelete(props.taskInfo?.id)}>delete</button>
      </div>
    </div>
  )
}

export default TaskCard