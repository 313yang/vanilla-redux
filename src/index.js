import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const btn = form.querySelector("button");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE TODO";
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  return console.log(store.getState());
});

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo, id: Date.now() });
};

form.addEventListener("submit", handleSubmit);
btn.addEventListener("click", handleSubmit);
