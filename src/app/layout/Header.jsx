
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Searcher from '../../app/components/Searcher/Searcher';
import {ReactComponent as BackBoard} from '../../assets/images/backlog-icon.svg';
import { updateBoard } from '../../redux/features/board/boardSlice';

import { Dropdown, Space } from 'antd';
import { Tooltip } from 'antd';
import { Avatar } from 'antd';
import './Header.scss';

const items = [
  {
    label: <a href="/">My Profile</a>,
    key: '0',
  },
  {
    label: <a href="/">Dark theme</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Exit',
    key: '3',
  },
];


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
          {!isSelected && 
            <BackBoard className={'tb-c-header__options__boards-toggle__back-icon'} onClick={toggleIcon} />
          }
          {isSelected && 
            <BackBoard className={'tb-c-header__options__boards-toggle__dash-icon'} onClick={toggleIcon} />
          }
        </button>
        <div className={'tb-c-header__options__my-profile'}>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar style={{ backgroundColor: '#f56a00' }}>R</Avatar>
            </Space>
          </a>
        </Dropdown>
        </div>
      </div>
    </div>
	);
};

export default Header;
