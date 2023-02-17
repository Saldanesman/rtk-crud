import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../../../redux/features/tasks/taskSlice'

import { v4 as uuid} from 'uuid';
import { Modal } from "antd";

import './ModalForm.scss';

const ModalForm = (props) => {
  const navigate = useNavigate();
  const editModal = props.editModal || false; 
  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

  const [task, setTask] = useState({
    title: '',
    description: '',
    created: '',
    deadline: '',
    type: '',
    priority: '',
    column: '',
  })
 
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    }
    navigate('/');
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <div className={'tb-c-modal-form'}>
      <Modal
        open={editModal}
        onOk={() => navigate("/")}
        onCancel={() => navigate("/")}
      >
        <form className={'tb-c-modal-form__form'} onSubmit={handleSubmit}>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Title: </p>
            <input name='title' type="text" placeholder='title' onChange={handleChange} value={task.title}/>
          </div>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Description: </p>
            <textarea name="description" placeholder='description' onChange={handleChange} value={task.description}></textarea>
          </div>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Created: </p>
            <input name='created' type="text" placeholder='created' onChange={handleChange} value={task.created}/>
          </div>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Deadline: </p>
            <input name='deadline' type="text" placeholder='deadline' onChange={handleChange} value={task.deadline}/>
          </div>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Type: </p>
            <input name='type' type="text" placeholder='type' onChange={handleChange} value={task.type}/>
          </div>
          <div className={'tb-c-modal-form__form__section'}>
            <p>Priority: </p>
            <input name='priority' type="text" placeholder='priority' onChange={handleChange} value={task.priority}/>
          </div>
          <button>Save</button>
        </form>
      </Modal>
    </div>
    
  )
}

export default ModalForm