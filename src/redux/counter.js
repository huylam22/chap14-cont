// Step 1: Create Decrement type

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementByValue";
const initialState = {
  count: 0,
};

// Step 2: write new fuction destructuring (action.type) == {type: 'decrement}
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };

    // Step 3: Add new case for decrement
    case DECREMENT:
      return { ...state, count: state.count - 1 };

    case INCREMENTBYVALUE:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
