import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
    // The toolkit allows state to be 'mutate'. If mutate the state, don't return anything. ! only 'new' state can be return !
  },
  [deleteToDo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});
const store = configureStore({ reducer });
export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
