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
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
const addToDo = (text) => {
  return { type: ADD_TODO, text, id: Date.now() };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};
const store = createStore(reducer);

const dispatcDeleteToDo = (e) => {
  const id = +e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", dispatcDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", handleSubmit);
btn.addEventListener("click", handleSubmit);
