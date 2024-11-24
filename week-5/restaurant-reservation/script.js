/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Robert King
  Date:   November, 24, 2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 4, isReserved: false },
  { tableNumber: 5, capacity: 6, isReserved: false },
  { tableNumber: 6, capacity: 8, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  console.log(`Reserving table ${tableNumber}...`);
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber));

  if(!table) {
    callback(`Error: Table ${tableNumber} does not exist.`);
    return;
  }
  if (table.isReserved) {
    callback(`Error: Table ${tableNumber} is already reserved.`);
    return;
  }
  table.isReserved = true;
  setTimeout(() => {
    callback(`Success: Table ${tableNumber} has been reserved.`);
  }, time);
}

// When the form is submitted, call the reserveTable function
  document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Add your code here
    const name = document.getElementById("name").value.trim();
    const tableNumber = document.getElementById("tableNumber").value.trim();
    const messageElement = document.getElementById("message");

    //Debugging Verify the form values
    console.log(`Name: ${name}, Table Number: ${tableNumber}`);

    if (!messageElement) {
      console.error("Error: #message element not found in the DOM.");
      return;
    }
    
    //Clear previous messages
    messageElement.textContent = '';

    if (!name || !tableNumber) {
      messageElement.textContent = 'Error: Please fill in all fields.';
      console.error("Error: Missing input fields.");
      return;
    }

    //Call reserveTable and update the message
    reserveTable(tableNumber, (message) => {
      console.log(`Callback message: ${message}`);
      messageElement.textContent = message;
    }, 1000);
  });
