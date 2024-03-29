import { useDispatch, useSelector } from "react-redux";
import { increment } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged  = useSelector(state => state.isLogged);
  const dispatch  =  useDispatch();
  return (
    <div className="App">
      <h1> Counter {counter} </h1>
      <button onClick = {()=> dispatch(increment())}> + </button>
      {isLogged? <h3> valuable information i shouldnot see </h3> : ''}
    </div>
  );
}

export default App;
