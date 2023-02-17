import {ReactComponent as SearcherIcon} from '../../../assets/images/search-icon.svg';
import './Searcher.scss';


const Searcher = () => {

	return (
		<div className={'tb-c-searcher'}>
      <div className={'tb-c-searcher__icon-container'}>
        <SearcherIcon className={'tb-c-searcher__icon-container__icon'} />
      </div>
      <div className={'tb-c-searcher__field'}>
        <input  type="text" placeholder="Search..."/>
      </div>
      
    </div>
	);
};

export default Searcher;
