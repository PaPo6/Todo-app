//add element
let input = document.querySelector('#add');
let btn = document.querySelector('.btnCheck');
let toDoList = document.querySelector('.todo-list');
let checkbox = document.querySelector('.checkbox');
let check = document.querySelector('.check');
let label = document.querySelector('label');
let itemsLeft = document.querySelector('.items-left span');
let completedFilterButton = document.querySelector('#completed');
let switcher = document.querySelector('.switcher');

itemsLeft.innerText = document.querySelectorAll('.dragula input').length;

let todos = [];

//switcher
const changeTheme = function () {
    document.body.classList.toggle("light");
}
switcher.addEventListener("click", changeTheme);


input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
        addElement(input.value);
        input.value = '';
    }
});

//add item
const addElement = function () {
    // const elem = document.createElement('li');

    let txt = document.getElementById("add").value;
    if (txt === "") {
        alert("you must write something");
    } else {
        const elem = document.createElement('label');
        elem.classList.add('dragula');
        elem.innerHTML = `
            <input type="checkbox">
            <div class="checkbox">
            <div class="check">
            </div>
            </div>
            <span>${txt}</span>
            <img src="images/icon-cross.svg" alt="delete" class="delete">
            `;

        if (document.querySelector('.filters input:checked').id === 'completed') {
            elem.classList.add('hidden');
        }

        toDoList.append(elem);
        updateItemsCount(document.querySelectorAll('.dragula input').length);
    }
}
btn.addEventListener("click", addElement);

const updateItemsCount = function (number) {
    itemsLeft.innerText = number;
}


//remove todo item
function deleteToDoList(elem) {
    elem.remove();
    updateItemsCount(document.querySelectorAll('.dragula input').length);
}
toDoList.addEventListener('click', (f) => {
    if (f.target.classList.contains('delete')) {
        deleteToDoList(f.target.parentElement);
    }
});

//CLEAR all
document.querySelector('.clearAll').addEventListener('click', () => {
    document.querySelectorAll('.dragula input:checked + .checkbox').forEach(item => {
        deleteToDoList(item.closest('label'));
    });
});

//all filter
document.querySelector('#all').addEventListener('click', () => {
    const allFilter = document.querySelectorAll('.dragula input + .checkbox')
    allFilter.forEach(item => {
        item.closest('label').style.display = "grid";
    });
    updateItemsCount(allFilter.length);
});

//completed filter
document.querySelector('#completed').addEventListener('click', () => {
    document.querySelectorAll('.dragula input:not(:checked) + .checkbox').forEach(item => {
        item.closest('label').style.display = "none";
    });
    const completedFilter = document.querySelectorAll('.dragula input:checked + .checkbox')
    completedFilter.forEach(item => {
        item.closest('label').style.display = "grid";
    });
    updateItemsCount(completedFilter.length);
});
//active filter
document.querySelector('#active').addEventListener('click', () => {
    document.querySelectorAll('.dragula input:checked + .checkbox').forEach(item => {
        item.closest('label').style.display = "none";
    });
    const activeFilter = document.querySelectorAll('.dragula input:not(:checked) + .checkbox')
    activeFilter.forEach(item => {
        item.closest('label').style.display = "grid";
    });
    updateItemsCount(activeFilter.length);
});


dragula([document.getElementById('sortable')]);