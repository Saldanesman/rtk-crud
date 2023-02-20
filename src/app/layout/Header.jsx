
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Searcher from '../../app/components/Searcher/Searcher';
import {ReactComponent as BackBoard} from '../../assets/images/backlog-icon.svg';
import {ReactComponent as DashBoard} from '../../assets/images/dashboard-icon.svg';
import {ReactComponent as User} from '../../assets/images/user.svg';
import { updateBoard } from '../../redux/features/board/boardSlice';
import './Header.scss';


const Header = () => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const toggleIcon = () => {
    setIsSelected(!isSelected);
    dispatch(updateBoard(isSelected));
  };

	return (
		<div className={'tb-c-header'}>
      <div className={'tb-c-header__logo'}>HEADER</div>
      <div className={'tb-c-header__options'}>
        <div className={'tb-c-header__options__searcher'}>
          <Searcher />
        </div>
        <button className={'tb-c-header__options__boards-toggle'}>
          {!isSelected && <BackBoard className={'tb-c-header__options__boards-toggle__icon'} onClick={toggleIcon} />}
          {isSelected && <DashBoard className={'tb-c-header__options__boards-toggle__icon'} onClick={toggleIcon} />}
        </button>
        <div className={'tb-c-header__options__my-profile'}>
          <User className={'tb-c-header__options__my-profile__icon'} />
        </div>
      </div>
    </div>
	);
};

export default Header;
