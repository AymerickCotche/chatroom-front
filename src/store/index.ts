import { createStore, compose, applyMiddleware } from 'redux';
import reducer from 'src/reducer';
import loginMiddleware from 'src/middlewares/loginMiddleware';
import wsMW from 'src/middlewares/wsMW';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers(
    applyMiddleware(
      loginMiddleware,
      wsMW,
    ),
  ),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
