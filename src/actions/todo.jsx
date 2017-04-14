// Add the actions here that we created in the previous steps...
const ADD_TODO = 'todo/ADD_TODO';

export function addTodo(message) {
  console.log("addTODO - ");
    return {
        type: ADD_TODO,
        message: message,
        completed: false
    };
}