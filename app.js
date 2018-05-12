let inputBox = document.getElementById('todoInput');
inputBox.addEventListener('keydown', display);

function display(e) {
    if (e.keyCode == 13) {
        let div = document.createElement('div');
        div.className += 'todoItem';
        div.innerHTML = inputBox.value;
        document.getElementById('todos').appendChild(div);
    }
}