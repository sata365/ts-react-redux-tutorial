import {addTodoAction, setVisibilityFilterAction, toggleTodoAction} from "../actions/index";
import {todoState} from "../store";

const initialState = {
  id: 0,
  text: "",
  completed: false
};

const todo = (state: todoState = initialState, action: addTodoAction|toggleTodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
};

const todos = (state: todoState[] = [], action: addTodoAction|toggleTodoAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos