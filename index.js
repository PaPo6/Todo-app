

//add element
let input = document.querySelector('#add');
let btn = document.querySelector('.btnCheck');
let toDoList = document.querySelector('.todo-list');
let li = document.getElementsByTagName('.todo-list li');
let check = document.querySelector('.co')

let toDoListLenght = toDoList.lenght;

let listLenght = li.lenght;

// const CHECK = "fas fa-circle co";
// const UNCHECK = "far fa-circle co";
// const LINE_THROUGHT = "lineThrough";

const addElement = function () {
    let txt = document.getElementById("add").value;
    if(txt === ""){
        alert("you must write something");
    } else {
        toDoList.innerHTML += `<li>
        <i class ="far fa-circle co" action ="complete"></i>
        <img src="images/icon-check.svg" alt="" class = "check">
        <span>${txt}</span>
        <img src="images/icon-cross.svg" alt="delete" class="delete"></li>`;
    }

};

// const addElement = function () {
//     let txt = document.getElementById("add").value;
//     if(txt === ""){
//         alert("you must write something");
//     } else {
//         toDoList.innerHTML += `<li>
//         <input type="checkbox" id="todo_${toDoListLenght}">
//         <span>${txt}</span>
//         <img src="images/icon-cross.svg" alt="delete" class="delete"></li>`;
//     }

// };

btn.addEventListener("click", addElement);

const completeToDo = function(element){
    const CHECK = "fa-check-circle";
    const UNCHECK = "fa-circle";
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle('.checkedLine');
}

input.addEventListener("keydown", (event) => {
    if(event.keyCode == 13) {
    addElement()
    }
});

// input.addEventListener("keyup", (event) => {
//     if(event.keyCode === 13 || event.key === "Enter") {
//     toDoList.push(event.target.value);
//     newToDO(e.target.value);
//     input.value = "";
//     }
// });

//mark todos as complete
// toDoList.addEventListener('click', e => {
//     if(e.target.tagName == 'SPAN'){
//         e.target.classList.toggle('completed');
//     }
// })
function deleteToDoList(e){
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
}
toDoList.addEventListener('click',deleteToDoList);

