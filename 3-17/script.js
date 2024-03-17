// Html element variables
const input = document.getElementById('todo-input');
const form = document.querySelector('.todo-form');
const list = document.querySelector('.todo-list');


// Functions
const createListItem = () => {
    const textInput = input.value;
    const listItem = document.createElement('li');
    listItem.textContent = textInput;
    listItem.setAttribute('class', 'todo-list__list-item');
    list.appendChild(listItem);

    createDeleteButton(listItem);
    handleStrikeThrough(listItem);
}

const createDeleteButton = (listItem) => {

    const deleteButton = document.createElement('span');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    })
    deleteButton.textContent = 'x';
    listItem.append(deleteButton);
}

const handleStrikeThrough = (listItem) => {
    listItem.style.cursor = 'pointer';
    listItem.addEventListener('click', () => {
        if (listItem.style.textDecoration === 'line-through') {
            listItem.style.textDecoration = 'none';
        } else {
            listItem.style.textDecoration = 'line-through';
        }
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') {
        createListItem();
    } 
  
    input.value = '';

}


// Event listeners
form.addEventListener('submit', handleSubmit);
