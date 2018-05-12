let inputBox = document.getElementById('todoInput');
inputBox.addEventListener('keydown', display);

function display(e) {

    // 13 is enter key
    if (e.keyCode == 13) {
        let div = document.createElement('div');
        div.className += 'todoItem';
        div.innerHTML = inputBox.value;
        document.getElementById('todos').appendChild(div);

        // let them discover this comand by themselves
        inputBox.value = "";
    }

}