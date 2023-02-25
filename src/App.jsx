import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
