import rootReducer from "../Reducer/Index.js"
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;
