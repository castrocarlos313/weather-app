import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import climaReducer from "../reducers/climaReducer";

const store = createStore(climaReducer, compose(applyMiddleware(thunk)));

export default store;
