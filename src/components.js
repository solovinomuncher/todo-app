import { format } from "date-fns";

// non-DOM logic
const makeTodo = (title, desc, dueDate, priority) => {
  return {
    title: title,
    desc: desc,
    dueDate: format(new Date(dueDate), "MMM d y"),
    priority: priority,
  };
};

function makeProject(title, todoList) {
  return {
    title: title,
    todoList: todoList,
  };
}

// non-DOM utility
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// DOM logic
// in index.js file

// function dateComponentExample() {
//   const formattedDate = format(new Date(), "MMM d y");
//   return formattedDate;
// }

export { makeTodo, makeProject, removeAllChildNodes };
