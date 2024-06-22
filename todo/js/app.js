let $ = document;
let moodWeb = $.getElementById("moodWeb");
const todoName = $.getElementById("todo-name");
const itemsSome = $.getElementById("items-some");
const delComp = $.getElementById("delComp");
const showAll = $.getElementById("showAll");
const showActive = $.getElementById("showActive");
const showComp = $.getElementById("showComp");
const showAll1 = $.getElementById("showAll1");
const showActive1 = $.getElementById("showActive1");
const showComp1 = $.getElementById("showComp1");
const boxTodo = $.querySelector(".box-todo");
const btmContent = $.querySelector(".btm-content");
const topImg = $.querySelector(".top-img");
let chek = "";
let todoArray = [];
let page = 1;
let items = "";
let click1 = "";
let newArray = null;
let dark = "dark"
let newTodoArray = [...todoArray];

window.addEventListener("load", (e) => {
  let s = localStorage.getItem("todo");
  dark = localStorage.getItem("dark");
  ls()
  if (s) {
    todoArray = JSON.parse(s);
    newTodoArray = [...todoArray];
    ceElem(newTodoArray);
    btmInfo()
    someItems()
  }
});

// dark mood
let ls = function () {
  if (dark != "dark") {
    moodWeb.setAttribute("src" , "images/icon-moon.svg")
    topImg.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    $.documentElement.style.setProperty("--dark", "hsl(236, 33%, 92%)");
    $.documentElement.style.setProperty("--dark-todo", "hsl(0, 0%, 98%)");
    $.documentElement.style.setProperty("--color", "hsl(235, 11%, 22%)");
    localStorage.setItem("dark", "light");
  } else {
    moodWeb.setAttribute("src" , "images/icon-sun.svg")
    topImg.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    $.documentElement.style.setProperty("--dark", "hsl(235, 21%, 11%)");
    $.documentElement.style.setProperty("--dark-todo", "hsl(235, 24%, 19%)");
    $.documentElement.style.setProperty("--color", "#f5f5f5");
    localStorage.setItem("dark", "dark");
  }
}

let moodd = function () {
  if (moodWeb.getAttribute("src") == "images/icon-sun.svg") {
    moodWeb.setAttribute("src" , "images/icon-moon.svg")
    topImg.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    $.documentElement.style.setProperty("--dark", "hsl(236, 33%, 92%)");
    $.documentElement.style.setProperty("--dark-todo", "hsl(0, 0%, 98%)");
    $.documentElement.style.setProperty("--color", "hsl(235, 11%, 22%)");
    localStorage.setItem("dark", "light");
  } else {
    moodWeb.setAttribute("src" , "images/icon-sun.svg")
    topImg.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    $.documentElement.style.setProperty("--dark", "hsl(235, 21%, 11%)");
    $.documentElement.style.setProperty("--dark-todo", "hsl(235, 24%, 19%)");
    $.documentElement.style.setProperty("--color", "#f5f5f5");
    localStorage.setItem("dark", "dark");
  }
}
moodWeb.addEventListener("click", moodd);

// dark mood
// crelem
let btmInfo = function () {
  if (!todoArray.length) {
    btmContent.style.display = "none";
  } else {
    btmContent.style.display = "flex";
  }
};

btmInfo();
let ceElem = function (newTodoArray) {
  btmInfo();
  boxTodo.innerHTML = "";
  newTodoArray.forEach((elem) => {
    if (elem.completed == true) {
      boxTodo.insertAdjacentHTML(
        "afterbegin",
        `<div class='inp-todo' data-id="${elem.id}"><div class='chek' style="background:linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)); "><img src='images/icon-check.svg' class="click"></div><p class="todoP" style="text-decoration: line-through;">${elem.name}</p></div>`
      );
    } else {
      boxTodo.insertAdjacentHTML(
        "afterbegin",
        `<div class='inp-todo' data-id="${elem.id}"><div class='chek'"></div><p class="todoP">${elem.name}</p></div>`
      );
    }
  });
  items = "";
  items = $.querySelectorAll(".todoP");
  click1 = "";
  click1 = $.querySelectorAll(".click");
  chek = "";
  chek = $.querySelectorAll(".chek");
  items.forEach((e) => {
    e.addEventListener("click", compeleted);
  });
  click1.forEach((e) => {
    e.addEventListener("click", compeleted);
  });
  chek.forEach((e) => {
    e.addEventListener("click", compeleted);
  });
};

function createElemTodo(todoName) {
  if (todoName) {
    newArray = {
      id: todoArray.length + 1,
      name: todoName,
      completed: false,
    };
    localStorage.setItem("todo", JSON.stringify(todoArray));
    todoArray.push(newArray);
    someItems1();
    newTodoArray = [...todoArray];
    ceElem(newTodoArray);
  }
}

todoName.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    createElemTodo(todoName.value);
    todoName.value = "";
  }
});

let compeleted = function (e) {
  let idE = e.target.parentElement.getAttribute("data-id");
  let indx = todoArray.findIndex((e) => idE == e.id);
  if (todoArray[indx].completed == true) {
    todoArray[indx].completed = false;
  } else {
    todoArray[indx].completed = true;
  }
  newTodoArray = [...todoArray];
  showAll.classList.add("focus");
  showActive.classList.remove("focus");
  showComp.classList.remove("focus");
  showAll1.classList.add("focus");
  showActive1.classList.remove("focus");
  showComp1.classList.remove("focus");
  localStorage.setItem("todo", JSON.stringify(todoArray));
  ceElem(newTodoArray);
};

let del = function (e) {
  let delArray = todoArray.filter((e) => {
    return e.completed == true;
  });
  let indx;
  delArray.forEach((e1) => {
    indx = todoArray.findIndex((e) => e1.id == e.id);
    todoArray.splice(indx, 1);
  });
  newTodoArray = [...todoArray];
  showAll.classList.add("focus");
  showActive.classList.remove("focus");
  showComp.classList.remove("focus");
  showAll1.classList.add("focus");
  showActive1.classList.remove("focus");
  showComp1.classList.remove("focus");
  localStorage.setItem("todo", JSON.stringify(todoArray));
  someItems()
  ceElem(newTodoArray);
};

// btm info
let focus = function (e) {
  showAll.classList.remove("focus");
  showActive.classList.remove("focus");
  showComp.classList.remove("focus");
  showAll1.classList.remove("focus");
  showActive1.classList.remove("focus");
  showComp1.classList.remove("focus");
  e.target.classList.add("focus");
  page = e.target.getAttribute("data-page");
  console.log(page);
  switch (page) {
    case "1":
      newTodoArray = [...todoArray];
      someItems();

      ceElem(todoArray);
      break;
    case "2":
      newTodoArray = [...todoArray];
      newTodoArray = newTodoArray.filter((e) => e.completed == false);
      someItems();

      ceElem(newTodoArray);
      break;
    case "3":
      newTodoArray = [...todoArray];
      newTodoArray = newTodoArray.filter((e) => e.completed == true);
      someItems();

      ceElem(newTodoArray);
      break;
  }
};

let someItems = function () {
  let itemsNum = newTodoArray.length;
  itemsSome.innerHTML = `${itemsNum} items left`;
};

let someItems1 = function () {
  let itemsNum = todoArray.length;
  itemsSome.innerHTML = `${itemsNum} items left`;
};
showAll.addEventListener("click", focus);
showActive.addEventListener("click", focus);
showComp.addEventListener("click", focus);
showAll1.addEventListener("click", focus);
showActive1.addEventListener("click", focus);
showComp1.addEventListener("click", focus);

////////////////////////////////////////////////

delComp.addEventListener("click", del);
