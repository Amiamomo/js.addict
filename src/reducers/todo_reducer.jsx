// ./src/reducers/todo_reducers.jsx

const ADD_TODO = 'todo/ADD_TODO';


export default (state = [], action) => {

  //console.log("todo_reducer: ADD_TODO :expected :"+ADD_TODO);
  console.log(action);
  switch (action.type){
    case ADD_TODO:
      console.log("_____________________________________________");
      console.log("todo_reducer: >>> action.type :"+action.type+" - state : ");
      console.log(state);

      var newState = Object.assign({}, state);
      console.log("todo_reducer: ADD_TODOOO OO");
      console.log(newState);

      newState.items.push({
        message: action.message,
        completed: false
      });
      console.log("reducer : len:"+newState.items.length);
      console.log(newState);
      return newState;
        // return [
        //   ...state,
        //   Object.assign({}, action.book)
        // ];
    default:
          return state;
  }
};
