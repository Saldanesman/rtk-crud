import Header from "../../layout/Header";
import TodoBoard from "../TodoBoard/TodoBoard";


const Home = (props) => {

  return (
    <div className={'tb-c-home'}>
      <Header />
      <div className={'tb-c-home__board'}>
        <TodoBoard editModal={props.editModal} createModal={props.createModal}/>
      </div>
    </div>
  )
}

export default Home