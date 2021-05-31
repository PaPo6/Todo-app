// let input = document.querySelector('#add');
// let btn = document.querySelector('.btnCheck');
// let toDoList = document.querySelector('.todo-list');
// let el = document.getElementsByTagName('.todo-list li');

// // let listLenght = li.lenght;

// const addElement = function () {
//     let txt = document.getElementById("#add").value;
//     if(txt === ""){
//         alert("you must write something");
//     } else {
//         let li = document.createElement('li');
//         li.innerHTML = txt;
//         toDoList.insertBefore(li,toDoList.childNodes[0]);
//         input.value = '';
//     }

// };

// btn.addEventListener("click", addElement);


//add element
let input = document.querySelector('#add');
let btn = document.querySelector('.btnCheck');
let toDoList = document.querySelector('.todo-list');
let li = document.getElementsByTagName('.todo-list li');

let toDoListLenght = toDoList.lenght;

// let listLenght = li.lenght;

const addElement = function () {
    let txt = document.getElementById("#add").value;
    if(txt === ""){
        alert("you must write something");
    } else {
        toDoList.innerHTML += `<li>
        <input type="checkbox" id="todo_${toDoListLenght}">
        <span>${txt}</span>
        <img src="images/icon-cross.svg" alt="delete" class="delete"></li>`;
    }

};

btn.addEventListener("click", addElement);


toDoList.addEventListener('click', e => {
    if(e.target.tagName == 'SPAN'){
        e.target.classList.toggle('completed');
    }
})
