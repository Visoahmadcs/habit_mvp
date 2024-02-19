// static/script.js


let selectedCell;
document.addEventListener('DOMContentLoaded', function() {
    updateDatesAndTable();
});

function updateDatesAndTable() {
    // Get the current date
    const currentDate = new Date();

    // Get the header row
    const dateHeaderRow = document.getElementById('dateHeaderRow');

    // Dynamically generate table headers with dates for the next 7 days
    for (let i = 0; i < 7; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        const formattedDate = formatDate(nextDate);
        dateHeaderRow.innerHTML += `<th>${formattedDate}</th>`;
    }

    // Call a function to update the habit data in the table (you need to implement this function)
    // updateTableWithHabitData();
}

function formatDate(date) {
    const options = { weekday: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function updateTableWithHabitData() {
    // Implement this function to populate the habit data in the table based on the selected date
    // You may need to fetch data from your server or use local data
}

function openModal(cell) {
    // Store the selected cell
    selectedCell = cell;

    // Get the habit name from the first cell of the row
    const habitName = cell.parentNode.cells[0].innerHTML;

    // Set the habit name in the modal
    document.getElementById('modalHabitName').innerHTML = habitName;

    // Display the modal
    const modal = document.getElementById('habitModal');
    modal.style.display = 'block';
}

function closeModal() {
    // Reset the selected cell
    selectedCell = null;

    // Hide the modal
    const modal = document.getElementById('habitModal');
    modal.style.display = 'none';
}

function submitHabitModal() {
    if (selectedCell) {
        // Get form input values
        const habitStatus = document.getElementById('habitStatus').value;
        const quantitativeData = document.getElementById('modalQuantitativeData').value;

        // Update the selected cell with the habit information
        selectedCell.innerHTML = `${habitStatus} ${quantitativeData}`;

        // Close the modal
        closeModal();
    }
}

// Add event listeners to table cells
const tableBody = document.getElementById('habitTableBody');
tableBody.addEventListener('click', function(event) {
    const clickedCell = event.target;

    // Check if a cell was clicked (excluding the header cells)
    if (clickedCell.tagName === 'TD') {
        openModal(clickedCell);
    }
});
