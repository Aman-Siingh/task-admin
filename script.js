document.getElementById('submit-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input').value;
    const teamDropdown = document.getElementById('team-dropdown');
    const teamName = teamDropdown.options[teamDropdown.selectedIndex].text;

    if (taskInput === "" || teamDropdown.selectedIndex === 0) {
        alert("Please enter a task and select a team.");
        return;
    }

    const tableBody = document.getElementById('task-table-body');
    const rowCount = tableBody.rows.length + 1;

    const newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = rowCount;
    newRow.insertCell(1).innerText = teamName;
    newRow.insertCell(2).innerText = taskInput;

    const deleteCell = newRow.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
        tableBody.deleteRow(newRow.rowIndex - 1);
    });
    deleteCell.appendChild(deleteButton);

    document.getElementById('task-input').value = '';
    teamDropdown.selectedIndex = 0;
});
