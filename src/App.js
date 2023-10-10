import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/counter";
import "./styles.css";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className='counterstyle'> The count is: {count}</h1>
      <button className='buttonstyle' onClick={() => dispatch(increment())}>Increment +</button>
      <button className='buttonstyle' onClick={() => dispatch(decrement())}>Decrement -</button>
      <button className='buttonstyle' onClick={() => dispatch(incrementByAmount(10))}>
        Increment + by 10
      </button>
      <button className='buttonstyle' onClick={() => dispatch(decrementByAmount(10))}>
        Decrement - by 10
      </button>
    </div>
  );
}

export default App;
