import Head from 'next/head'
import Navbar from '../Components/Navbar/Navbar'
import TodoComponent from '../Components/TODO/TodoComponent';
import { table, minifyRecords} from './api/utils';
import { connect } from 'react-redux';
import { fetchTodoData } from '../Store/Actions/Actions';

const Home = ({initialTodo, fetchData}) => {

  fetchData(initialTodo)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <TodoComponent /> */}
      
    </div>
  )
};

const mapStateToProps = (state) => {
  return{
    todos: state
  }
}

const mapDispatchToProps = {
  fetchData: fetchTodoData
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



export const getServerSideProps = async () => {
  try {
    const todo = await table.select({}).firstPage();
    return{
      props: {
        initialTodo: minifyRecords(todo)
      }
    }
  } catch (error) {
    console.log(error);
    return{
      props: {
        err: "something went wrong..."
      }
    }
  }
}
