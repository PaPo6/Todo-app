let input = document.querySelector('#add');
let list = document.querySelector('.todoList')

let add = function () {
    let text = input.value;
    if(text === ""){
        alert("you must write something");
    } else {
        let li = document.createElement('li');
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value='';

    }
}

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});