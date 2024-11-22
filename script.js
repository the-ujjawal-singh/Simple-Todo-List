// Get elements from the DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('inputValues');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const todoText = input.value.trim();
    
    // Check if input is not empty
    if (todoText) {
        addTodoItem(todoText);
        input.value = ''; // Clear the input field
    }
});

// Function to add todo item to the list
function addTodoItem(todoText) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    
    // Create todo text element
    const todoTextElement = document.createElement('span');
    todoTextElement.textContent = todoText;
    todoItem.appendChild(todoTextElement);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoItem.remove(); // Remove todo item on click
    });
    todoItem.appendChild(deleteButton);
    
    // Add the todo item to the list
    todoList.appendChild(todoItem);
}
