const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer ( pure function )
// const rootReducer = (state, action) => { ...do stuffs and return a state }
const rootReducer = (state = initialState, actions) => {
  const { type, value } = actions;
  const { counter } = state;

  if (type === "INC_COUNTER") return { ...state, counter: counter + 1 };
  if (type === "ADD_COUNTER") return { ...state, counter: counter + value };

  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscriptions
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Actions
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
