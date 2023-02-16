
import { useState } from 'react';
import Searcher from '../components/Searcher/Searcher';
import './Header.scss';


const Header = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleIcon = () => {
    setIsSelected(!isSelected);
  };

	return (
		<div className={'tb-c-header'}>
      <div className={'tb-c-header__logo'}>HEADER</div>
      <div className={'tb-c-header__options'}>
        <div className={'tb-c-header__options__searcher'}>
          <Searcher />
        </div>
        <button className={'tb-c-header__options__boards-toggle'}>
        
        </button>
        <div className={'tb-c-header__options__my-profile'}>
          
        </div>
      </div>
    </div>
	);
};

export default Header;
