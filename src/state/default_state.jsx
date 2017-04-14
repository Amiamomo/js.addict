//https://egghead.io/lessons/javascript-redux-writing-a-counter-reducer-with-tests
//https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe
import {addTodo} from '../actions/todo.jsx'
import {changeMessage} from '../actions/messages.jsx'


export const defaultState = {
  todo : {
    items: []
  },
   my_message : "Message d un matin"  
};