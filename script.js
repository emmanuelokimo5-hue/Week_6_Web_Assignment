// Store the user's budget
let budget = 0;

// Array used to store multiple expense records
let expenses = [];

// Get elements from the HTML
const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetInput = document.getElementById("budget");
const expenseNameInput = document.getElementById("expenseName");
const expenseAmountInput = document.getElementById("expenseAmount");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const remainingDisplay = document.getElementById("remainingDisplay");
const budgetMessage = document.getElementById("budgetMessage");

const expenseList = document.getElementById("expenseList");
const clearButton = document.getElementById("clearButton");


// Handle budget form submission
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    budget = Number(budgetInput.value);

    if (budget <= 0) {
        budgetMessage.textContent = "Please enter a budget greater than zero.";
        return;
    }

    updateDashboard();

    budgetMessage.textContent = "Your budget has been successfully set.";

    budgetInput.value = "";
});


// Handle adding a new expense
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);

    // Conditional statement to validate the expense
    if (name === "" || amount <= 0) {
        budgetMessage.textContent =
            "Please enter a valid expense name and amount.";
        return;
    }

    // Create an expense object
    const expense = {
        name: name,
        amount: amount
    };

    // Add the expense object to the array
    expenses.push(expense);

    // Update the webpage
    updateDashboard();
    displayExpenses();

    // Clear the form
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
});


// Calculate total expenses using a loop
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update the dashboard dynamically
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remaining = budget - totalExpenses;

    budgetDisplay.textContent = `KES ${budget.toFixed(2)}`;
    expenseDisplay.textContent = `KES ${totalExpenses.toFixed(2)}`;
    remainingDisplay.textContent = `KES ${remaining.toFixed(2)}`;

    // Conditional statements for budget feedback
    if (budget === 0) {
        budgetMessage.textContent = "Please set your budget.";
    } else if (remaining < 0) {
        budgetMessage.textContent =
            "Warning: You have exceeded your budget!";
    } else if (remaining === 0) {
        budgetMessage.textContent =
            "You have used your entire budget.";
    } else if (totalExpenses >= budget * 0.8) {
        budgetMessage.textContent =
            "Caution: You have used 80% or more of your budget.";
    } else {
        budgetMessage.textContent =
            "Good job! You are currently within your budget.";
    }
}


// Display all expenses on the webpage
function displayExpenses() {
    // Clear the existing list
    expenseList.innerHTML = "";

    // Check if there are no expenses
    if (expenses.length === 0) {
        expenseList.innerHTML = "<li>No expenses added yet.</li>";
        return;
    }

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {
        const listItem = document.createElement("li");

        const expenseInfo = document.createElement("span");
        expenseInfo.className = "expense-info";

        expenseInfo.textContent =
            `${expenses[i].name}: KES ${expenses[i].amount.toFixed(2)}`;

        // Create delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        // Event listener for deleting an expense
        deleteButton.addEventListener("click", function() {
            expenses.splice(i, 1);

            displayExpenses();
            updateDashboard();
        });

        listItem.appendChild(expenseInfo);
        listItem.appendChild(deleteButton);

        expenseList.appendChild(listItem);
    }
}


// Clear all expenses
clearButton.addEventListener("click", function() {

    if (expenses.length === 0) {
        budgetMessage.textContent = "There are no expenses to clear.";
        return;
    }

    const confirmation = confirm(
        "Are you sure you want to clear all expenses?"
    );

    if (confirmation) {
        expenses = [];

        displayExpenses();
        updateDashboard();

        budgetMessage.textContent = "All expenses have been cleared.";
    }
});


// Display the initial dashboard
updateDashboard();
displayExpenses();