import React from 'react'
import { useSelector } from 'react-redux';

import {ReactComponent as MoreInfo} from '../../../assets/images/points-3.svg';
import {ReactComponent as Delete} from '../../../assets/images/delete.svg';
import './DoneBoard.scss';

const DoneBoard = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div className={'tb-c-doneboard'}>
      <div className={'tb-c-doneboard__header'}>
        <h1 className={'tb-c-doneboard__header__title'}> DONE Board </h1>
      </div>
      <div className={'tb-c-doneboard__list'}>
        {tasks.map((task) => {
          return (
            <div className={'tb-c-doneboard__list__card'} key={task.id}>
              <h1 className={'tb-c-doneboard__list__card__title'}>{task.title}</h1>
              <div className={'tb-c-doneboard__list__card__icons'} key={task.id}>
                <p className={'tb-c-doneboard__list__card__icons__type'}> 
                  {task.type} 
                </p>
                <p className={'tb-c-doneboard__list__card__icons__date'}> 
                  4-8-2021 
                </p>
                <p className={'tb-c-doneboard__list__card__icons__info'}> 
                  <MoreInfo className={'tb-c-doneboard__list__card__icons__info__icon'} />
                </p>
                <p className={'tb-c-doneboard__list__card__icons__delete'}> 
                  <Delete className={'tb-c-doneboard__list__card__icons__delete__icon'} />
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DoneBoard