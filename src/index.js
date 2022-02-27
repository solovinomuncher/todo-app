import "./style.css";
import { makeTodo, makeProject, removeAllChildNodes } from "./components";

// initializing default project and todo
const defaultTodo = makeTodo("apple", "a fruit", "1 1 21", "high");
const defaultProject = makeProject("Fruit Basket", []);

// initializing project array to display in PROJECTS
const projectArray = [];

// adding default project with todo to project array
defaultProject.todoList.push(defaultTodo);
projectArray.push(defaultProject);

const createTodo = () => {
  // selecting inputs from DOM
  const title = document.querySelector("#task-title");
  const desc = document.querySelector("#task-desc");
  const dueDate = document.querySelector("#task-duedate");
  const priority = document.querySelector("#task-priority");

  // if any inputs are empty, end function
  if (
    title.value === "" ||
    desc.value === "" ||
    dueDate.value === NaN ||
    priority.value === ""
  ) {
    return;
  }

  // use makeTodo factory function to create new todo w/ input values
  const newTodo = makeTodo(
    title.value,
    desc.value,
    dueDate.value,
    priority.value
  );

  // reset input values
  title.value = "";
  desc.value = "";
  dueDate.value = "";
  priority.value = "";

  // add new todo to project currently selected
  addToSelectedProject(newTodo);
};

const submitTaskBtn = document.querySelector(".btn-submit-task");
submitTaskBtn.addEventListener("click", createTodo);

const addToSelectedProject = (newTodo) => {
  // selected project title's textcontent
  const selectedProjectTitle =
    document.querySelector(".selected-project").textContent;

  // for each project in project array,
  // if the selected project's title is the same as the given project's title
  // add the new todo to that given project
  projectArray.forEach((project) => {
    if (project.title === selectedProjectTitle) {
      project.todoList.push(newTodo);
    }
  });

  // render the project view
  renderProjectView();
};

const findProject = (projectTitle) => {
  // find the project with the same title, and return said project
  for (let i = 0; i < projectArray.length; i++) {
    if (projectArray[i].title === projectTitle) {
      return projectArray[i];
    }
  }
};

const renderProjectView = () => {
  const tasksList = document.querySelector(".tasks");
  const selectedProjectTitle =
    document.querySelector(".selected-project").textContent;

  removeAllChildNodes(tasksList);

  const selectedProject = findProject(selectedProjectTitle);

  selectedProject.todoList.forEach((task) => {
    const taskTitleDuedate = document.createElement("li");
    const taskTitle = document.createElement("p");
    const taskDuedate = document.createElement("p");

    taskTitleDuedate.classList.add("task-overview");

    taskTitle.textContent = task.title;
    taskDuedate.textContent = task.dueDate;

    taskTitleDuedate.appendChild(taskTitle);
    taskTitleDuedate.appendChild(taskDuedate);

    tasksList.appendChild(taskTitleDuedate);
  });

  const taskBoxes = document.querySelectorAll(".task-overview");

  taskBoxes.forEach((taskBox) => {
    taskBox.addEventListener("click", switchSelectedTask);
  });
};

const switchSelectedTask = (e) => {
  const prevSelectedTask = document.querySelector(".selected-task");

  if (e.target.nodeName === "P") {
    return;
  }

  if (prevSelectedTask === null) {
    e.target.classList.toggle("selected-task");
  } else {
    prevSelectedTask.classList.toggle("selected-task");
    e.target.classList.toggle("selected-task");
  }

  renderTask();
};

const renderTask = () => {
  const selectedProject = document.querySelector(".selected-project");
  const selectedTask =
    document.querySelector(".selected-task").firstElementChild;

  projectArray.forEach((project) => {
    if (project.title === selectedProject.textContent) {
      project.todoList.forEach((todo) => {
        if (todo.title === selectedTask.textContent) {
          renderTaskDOM(todo);
        }
      });
    }
  });
};

const renderTaskDOM = (todo) => {
  const taskTitle = document.querySelector(".task-view-title");
  const taskDesc = document.querySelector(".task-view-desc");
  const taskDuedate = document.querySelector(".task-view-duedate");
  const taskPriority = document.querySelector(".task-view-priority");

  taskTitle.textContent = todo.title;
  taskDesc.textContent = todo.desc;
  taskDuedate.textContent = todo.dueDate;
  taskPriority.textContent = todo.priority;
};

const deleteTask = (e) => {
  const taskTitle = document.querySelector(".task-view-title").textContent;

  for (let i = 0; i < projectArray.length; i++) {
    for (let j = 0; j < projectArray[i].todoList.length; j++) {
      if (projectArray[i].todoList[j].title === taskTitle) {
        projectArray[i].todoList.splice(j, 1);
      }
    }
  }

  renderProjectView();
};

const completeTaskBtn = document.querySelector(".btn-complete-task");
completeTaskBtn.addEventListener("click", deleteTask);

const switchSelectedProject = (e) => {
  const prevSelectedProject = document.querySelector(".selected-project");

  if (prevSelectedProject === null) {
    e.target.classList.toggle("selected-project");
  } else {
    prevSelectedProject.classList.toggle("selected-project");
    e.target.classList.toggle("selected-project");
  }

  renderProjectView();
};

const renderProjects = () => {
  const projectsList = document.querySelector(".projects");
  removeAllChildNodes(projectsList);

  projectArray.forEach((project) => {
    const projTitle = document.createElement("li");
    projTitle.textContent = project.title;
    projTitle.classList.add("project-title");
    projectsList.appendChild(projTitle);
  });

  const projectTitles = document.querySelectorAll(".project-title");

  projectTitles.forEach((title) => {
    title.addEventListener("click", switchSelectedProject);
  });
};

renderProjects();

const createProject = () => {
  const projectTitle = document.querySelector("#project-title");
  console.log(projectTitle);

  // if any inputs are empty, end function
  if (projectTitle.value === "") {
    return;
  }

  const newProj = makeProject(projectTitle.value, []);

  projectArray.push(newProj);

  projectTitle.value = "";

  renderProjects();
};

const submitProjectBtn = document.querySelector(".btn-submit-project");
submitProjectBtn.addEventListener("click", createProject);
