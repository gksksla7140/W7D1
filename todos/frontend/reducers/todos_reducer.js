import {RECEIVE_TODOS} from '../actions/todo_actions';
import {RECEIVE_TODO} from '../actions/todo_actions';
import {merge} from 'lodash';

const todosReducer = (state = {},action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_TODO:
    // newState = merge({}, state);
    newState[action.todo.id] = action.todo;
    return merge({}, state, newState);
    case RECEIVE_TODOS:

    action.todos.forEach ((el) => {


      newState[el.id] = el;
    });



    return merge({}, state, newState);
    default:
      return state;

  }


};

export default todosReducer;
