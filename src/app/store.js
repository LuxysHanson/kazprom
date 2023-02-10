import {applyMiddleware, compose, configureStore} from '@reduxjs/toolkit';
import recordReducer from '../features/record/recordSlice'
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(composeWithDevTools),
    // other store enhancers if any
);

export const store = configureStore({
  reducer: {
    recordReducer,
  },
}, enhancer);
