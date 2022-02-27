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

const saveToLocalStorage = (project) => {
  localStorage.setItem(project.title, JSON.stringify(project));

  // kept for reference and future testing involving local storage
  // const storedProject = JSON.parse(localStorage.getItem(project.title));
  // console.log(storedProject);
};

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

export { makeTodo, makeProject, removeAllChildNodes, saveToLocalStorage };
