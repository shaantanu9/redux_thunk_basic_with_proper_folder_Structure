import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../redux/actions/creators";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterReducer);
  console.log(counter, "count");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(addCounter(10))}>+</button>
    </div>
  );
};

export default Counter;
