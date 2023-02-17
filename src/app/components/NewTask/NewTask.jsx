import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Add} from '../../../assets/images/add.svg';
import EditTask from '../EditTask/EditTask';

import './NewTask.scss';

const NewTask = (props) => {

  return (
    <div className={'tb-c-new-task'}>
       <Link className={'tb-c-new-task__add-link'} to={'/create-task'}> 
          <Add className={'tb-c-new-task__add-link__icon'}/>
        </Link>
        <EditTask createModal={props.createModal} column={props.column} />
    </div>
  )
}

export default NewTask