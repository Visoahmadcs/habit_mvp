function addHabit() {
    // Get form input values
    const habitName = document.getElementById('habitName').value;
    const completionStatus = document.getElementById('completionStatus').value;
    const quantitativeData = document.getElementById('quantitativeData').value;

    // Get the table
    const table = document.getElementById('habitTable');

    // Create a new row
    const newRow = table.insertRow();

    // Add cells to the new row
    const habitCell = newRow.insertCell(0);
    habitCell.innerHTML = habitName;

    // Add cells for each weekday (initialize as empty)
    for (let i = 0; i < 4; i++) {
        const weekdayCell = newRow.insertCell(i + 1);
        weekdayCell.innerHTML = '';
    }

    // Update the cell for the corresponding weekday based on the completion status
    switch (completionStatus) {
        case 'Yes':
            // Use the second column (Monday) as an example, you can modify based on your needs
            const completionCell = newRow.cells[2];
            completionCell.innerHTML = `Yes (${quantitativeData})`;
            completionCell.classList.add('completed');
            break;
        case 'No':
            // Use the third column (Tuesday) as an example, you can modify based on your needs
            const noCompletionCell = newRow.cells[3];
            noCompletionCell.innerHTML = 'No';
            break;
        // Add more cases for other completion statuses or weekdays as needed
    }

    // Clear the form fields
    document.getElementById('habitName').value = '';
    document.getElementById('completionStatus').value = 'Yes';
    document.getElementById('quantitativeData').value = '';
}
