# SpendWise - Budget Tracker

SpendWise is a simple budgeting application that helps users set a budget, record expenses, calculate total spending, and monitor their remaining balance.

## Week 6 Improvements

This week, SpendWise was improved by adding JavaScript functionality. The application can now:

- Set a monthly budget.
- Add multiple expense records.
- Store expenses inside an array.
- Calculate total expenses.
- Calculate the remaining budget.
- Display expenses dynamically on the webpage.
- Give users budget warnings and feedback.
- Delete individual expenses.
- Clear all expense records.
- Respond to form submissions and button clicks.

## 1. Conditional Statements

Conditional statements are used to make decisions based on the user's budget and expenses.

For example, the application checks whether the user has exceeded the budget:

```javascript
if (remaining < 0) {
    budgetMessage.textContent =
        "Warning: You have exceeded your budget!";
}
```

The application also checks whether the user has used 80% or more of the budget:

```javascript
else if (totalExpenses >= budget * 0.8) {
    budgetMessage.textContent =
        "Caution: You have used 80% or more of your budget.";
}
```

These conditions allow SpendWise to provide appropriate feedback to the user.

## 2. Arrays

An array is used to store multiple expense records:

```javascript
let expenses = [];
```

Each expense is stored as an object containing the expense name and amount:

```javascript
const expense = {
    name: name,
    amount: amount
};

expenses.push(expense);
```

This makes it possible to store many expenses instead of creating separate variables for every expense.

## 3. Loops

Loops are used to process the expense records.

The `for` loop calculates the total amount spent:

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Another loop is used to display every expense on the webpage.

Using loops makes the application efficient because the same code can process any number of expense records.

## 4. DOM Manipulation

DOM manipulation is used to update the webpage whenever the user's data changes.

For example:

```javascript
budgetDisplay.textContent = `KES ${budget.toFixed(2)}`;
expenseDisplay.textContent = `KES ${totalExpenses.toFixed(2)}`;
remainingDisplay.textContent = `KES ${remaining.toFixed(2)}`;
```

The application also creates new HTML elements dynamically:

```javascript
const listItem = document.createElement("li");
```

This means that users can see their budget, total expenses, remaining balance, and expense records directly on the webpage without opening the browser console.

## 5. Events and User Interactions

SpendWise uses event listeners to respond to user actions.

For example, the budget form uses:

```javascript
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

The expense form also uses an event listener to add new expenses.

Delete buttons have event listeners that remove individual expense records.

The Clear All Expenses button also responds to a click event.

These events create a connection between user actions and JavaScript functionality.

## 6. How Everything Works Together

The main flow of the application is:

1. The user enters a budget.
2. JavaScript stores the budget.
3. The user enters an expense.
4. JavaScript creates an expense object.
5. The expense object is added to the expenses array.
6. A loop calculates the total expenses.
7. Conditional statements evaluate the user's budget situation.
8. DOM manipulation updates the dashboard.
9. The expense records are displayed on the webpage.
10. The user can delete expenses or clear all records.

This demonstrates how user actions can trigger JavaScript logic, update stored data, and display the results dynamically.

## 7. Challenges Encountered and Solutions

### Challenge 1: Calculating Multiple Expenses

At first, handling several expenses individually would require many variables.

**Solution:** An array was used to store all expense records. A loop then processes the records and calculates the total.

### Challenge 2: Updating the Page

The calculations would not be useful if they were only displayed in the browser console.

**Solution:** DOM manipulation was used to update the dashboard and expense list directly on the webpage.

### Challenge 3: Providing Budget Feedback

The application needed to tell users when they were close to or over their budget.

**Solution:** Conditional statements were added to check the remaining balance and provide appropriate messages.

### Challenge 4: Removing Expenses

Users need to correct mistakes after adding an expense.

**Solution:** Each expense receives a Delete button with an event listener that removes the selected record from the array and refreshes the dashboard.

## Conclusion

The Week 6 version of SpendWise demonstrates important JavaScript concepts including:

- Conditional statements
- Arrays
- Loops
- Functions
- DOM manipulation
- Event listeners
- User input
- Dynamic webpage updates

The application now provides an interactive budgeting experience instead of being a static webpage.
