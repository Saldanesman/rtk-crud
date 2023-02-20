import { useSelector } from "react-redux";
import Header from "../../layout/Header";
import TodoBoard from "../TodoBoard/TodoBoard";
import DoneBoard from "../DoneBoard/DoneBoard";


const Home = (props) => {
  const todoBoard = useSelector((state) => state.typeBoard.todoBoard);

  return (
    <div className={'tb-c-home'}>
      <Header />
      <div className={'tb-c-home__board'}>
        {todoBoard && <TodoBoard editModal={props.editModal} createModal={props.createModal}/>}
        {!todoBoard && <DoneBoard />}
      </div>
    </div>
  )
}

export default Home