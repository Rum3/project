let addToDoButton = document.getElementById('addToDo');
let toDoBox = document.getElementById('toDoBox');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    toDoBox.appendChild(paragraph);
})
