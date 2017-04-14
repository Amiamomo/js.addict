// ./src/reducers/index.js
import { combineReducers } from 'redux';
import todo_reducer from './todo_reducer.jsx'
import message_reducer from './message_reducer.jsx'

export default combineReducers({
  todo:        todo_reducer,
  my_message:  message_reducer
  // More reducers if there are
  // can go here
});