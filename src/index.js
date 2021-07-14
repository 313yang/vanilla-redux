import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const counter = (count = 0, action) => {
  return count;
};

const countStore = createStore(counter);
