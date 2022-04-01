import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import climaReducer from "../reducers/climaReducer";

const store = createStore(
  climaReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
