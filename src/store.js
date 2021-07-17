import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const DELETE_PAGE = "DELETE_PAGE";

const addToDo = (text) => {
  return { type: ADD, text, id: Date.now() };
};
const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    case DELETE_PAGE:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);
export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
