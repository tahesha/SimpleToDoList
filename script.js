// Function to add a new task
function addTask() {
    // Get the input field and its value
    const inputField = document.getElementById('taskInput');
    const taskText = inputField.value;

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Set the text content of the list item

    // Append the new list item to the task list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
}
