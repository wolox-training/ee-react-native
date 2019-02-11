import immutable from 'seamless-immutable';
import shortid from 'shortid';

import { actions } from './actions';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return immutable(state).merge({
        todos: [ ...state.todos, { id: shortid.generate(), text: action.payload, completed: false } ]
      });
    case actions.REMOVE_ITEM:
      return immutable(state).merge({
        todos: state.todos.filter(todo => todo.id !== action.payload)
      });
    case actions.TOGGLE_CHECKED_ITEM:
      return immutable(state).merge({
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { id: todo.id, text: todo.text, completed: !todo.completed};
          }
          return todo;
        })
      });
    case actions.REMOVE_COMPLETED:
      return immutable(state).merge({
        todos: state.todos.filter(todo => todo.completed !== true)
      });
    default:
      return state;
  }
};

export default reducer;
