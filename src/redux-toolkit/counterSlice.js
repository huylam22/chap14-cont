import { createSlice } from "@reduxjs/toolkit";

// name la de truy cap giong configStore (state.counter....)
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  // Thay the cho switch case trong redux core
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    incrementByValue: (state, { payload }) => {
      return {
        // action.payload (destructuring)
        // handle Logic code here
        ...state,
        count: state.count + payload,
      };
    },
    decrementByValue: (state, { payload }) => ({
      // action.payload (destructuring) == { payload }
      // handle Logic code here
      ...state,
      count: state.count - payload.value, // payload.value == action.payload.value
      log: console.log(payload),
    }),
  },
});

// console.log(counterSlice.actions);
export const { increment, decrement, incrementByValue, decrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
