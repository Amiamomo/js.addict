import {createStore} from 'redux';
import rootReducer from '../reducers/combinedReducers.jsx';

let my_store = null;

export default function configureStore(initialState) {
  console.log("configureStore: <<<<< ");
  console.log("configureStore: rootReducer : ");
  console.log(rootReducer);
  if (my_store === null) {
      my_store = createStore(rootReducer, initialState);
  }
  console.log("configureStore: my_store : ");
  console.log(my_store);

  return my_store;
}

