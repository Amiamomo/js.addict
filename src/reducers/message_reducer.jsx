// ./src/reducers/todo_reducers.jsx

const CHANGE_MESSAGE = 'message/CHANGE';


export default (state = [], action) => {
  switch (action.type){
    case CHANGE_MESSAGE:
      console.log("_____________________________________________");
      console.log("messages_reducer: >>> action.type :"+action.type+" - state : ");
      console.log(state);
      //console.log("todo_reducer: ADD_TODO :expected :"+ADD_TODO);
      console.log(action);
  
      //var newState = Object.assign({}, state);
      var newState = action.my_message;
      console.log("messages_reducer: ADD_TODO");
      console.log(newState);
      console.log(action);

      //newState.push(action.my_message);
      return newState;
        // return [
        //   ...state,
        //   Object.assign({}, action.book)
        // ];
    default:
          return state;
  }
};
