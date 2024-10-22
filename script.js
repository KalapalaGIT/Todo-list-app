document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const tr = document.createElement('tr');  // Create a new table row

    const taskTd = document.createElement('td');  // Create a new cell for the task
    taskTd.textContent = taskText;  // Set the task text
    taskTd.addEventListener('click', function() {
        taskTd.classList.toggle('completed');  // Toggle completed state on click
    });

    const dateTd = document.createElement('td');  // Create a new cell for the date
    dateTd.textContent = new Date().toLocaleDateString();  // Set the current date

    const actionTd = document.createElement('td');  // Create a new cell for actions
    const deleteButton = document.createElement('button');  // Create the delete button
    deleteButton.textContent = 'Delete';  // Set the button text
    deleteButton.classList.add('delete-button');  // Add CSS class
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(tr);  // Remove the row on delete button click
    });

    // Append cells to the row
    actionTd.appendChild(deleteButton);  // Add the delete button to the actions cell
    tr.appendChild(taskTd);  // Add the task cell to the row
    tr.appendChild(dateTd);  // Add the date cell to the row
    tr.appendChild(actionTd);  // Add the actions cell to the row

    taskList.appendChild(tr);  // Append the row to the task list
    taskInput.value = '';  // Clear the input field
}
