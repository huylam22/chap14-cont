import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "../redux-toolkit/counterSlice";
// import { increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  // Cach 1: dung props de truyen count sang app
  //   //   const [count, setCount] = React.useState(0);
  //   const increment = () => setCount((c) => c + 1);

  //   const decrement = () => setCount((c) => c - 1);

  // Cach 2: *** React Redux CORE
  //   const count = useSelector((state) => state.counter.count);
  //   // const {count} = useSelector(state => state.counter); same above
  //   const dispatch = useDispatch();
  //   const handleIncrement = () => {
  //     dispatch(increment());
  //   };

  //   // STEP 5: WRITE NEW FUNCTION TO HANDLE
  //   const handleDecrement = () => {
  //     dispatch({ type: "decrement" });
  //   };

  //   // new case
  //   const handleIncreaseBy10 = () => {
  //     dispatch(incrementByValue(10));
  //   };

  // *** React Redux Toolkit
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment()); // increment from redux-toolkit/counterSlice.js
  };

  const handleDecrement = () => {
    dispatch(decrement()); // increment from redux-toolkit/counterSlice.js
  };

  const handleIncreaseBy10 = () => {
    dispatch(incrementByValue({ value: 10 }));
  };

  const handleDecreaseBy10 = () => {
    dispatch(decrementByValue({ value: 10 }));
  };
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white shadow w-[200px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncreaseBy10}
        >
          Increase by 10
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecreaseBy10}
        >
          Decrease by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
