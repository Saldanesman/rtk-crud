import Header from "../../layout/Header";
import TodoBoard from "../TodoBoard/TodoBoard";


const Home = () => {

  return (
    <div className={'tb-c-home'}>
      <Header />
      <div className={'tb-c-home__board'}>
        <TodoBoard />
      </div>
    </div>
  )
}

export default Home