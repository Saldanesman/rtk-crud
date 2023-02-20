import React from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../../redux/features/tasks/taskSlice';

//icons
import {ReactComponent as LowPriority} from '../../../assets/images/low-priority.svg';
import {ReactComponent as MediumPriority} from '../../../assets/images/medium-priority.svg';
import {ReactComponent as HighPriority} from '../../../assets/images/high-priority.svg';
import {ReactComponent as Delete} from '../../../assets/images/delete.svg';
import {ReactComponent as Edit} from '../../../assets/images/edit.svg';

import './TaskCard.scss';
import EditTask from "../EditTask/EditTask";
import { Tooltip } from 'antd';


const TaskCard = (props) => {
  const dispatch = useDispatch(state => state.dispatch)

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className={'tb-c-task'}>
      <div className={'tb-c-task__head'}>
        <h1 className={'tb-c-task__head__title'}> 
          {props.taskInfo?.title} 
        </h1>
        <div className={'tb-c-task__head__icons'}>
          <Link to={`/edit-task/${props.taskInfo?.id}`}>
            <Tooltip title="Edit task" color={'#0e0e0e'}>
              <Edit className={'tb-c-task__head__icons__icon'} />
            </Tooltip>
          </Link>
          <Tooltip title="Delete task" color={'#0e0e0e'}>
            <Delete className={'tb-c-task__head__icons__icon'} onClick={() => handleDelete(props.taskInfo?.id)} />
          </Tooltip>
        </div>
      </div>
      <EditTask editModal={props.editModal} />
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
            {props.taskInfo?.priority === 'high' && 
              <Tooltip title="High priority" color={'#0e0e0e'}>
                <HighPriority />
              </Tooltip>
            }
            {props.taskInfo?.priority === 'medium' && 
              <Tooltip title="Medium priority" color={'#0e0e0e'}>
                <MediumPriority />
              </Tooltip>
            }
            {props.taskInfo?.priority === 'low' && 
              <Tooltip title="Low priority" color={'#0e0e0e'}>
                <LowPriority />
              </Tooltip>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard