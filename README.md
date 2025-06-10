# 💸 Angular Bill Splitter App

A simple Angular application to track and split expenses among multiple people.  
Built to learn Angular concepts like components, routing, directives, and state management.

---

## 🧾 About This Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

It is a bill-splitting and expense-tracking app that allows users to:

- Add multiple expenses with name, amount, and number of people involved
- Automatically calculate total expenses and split amount per person
- Reset or start a new bill when participants change
- Handle UI changes using Angular directives like `*ngIf` and `*ngFor`
- Practice Angular skills like component creation, form handling, and state logic

---

## 🚀 Technologies Used

- Angular (v14+)
- TypeScript
- HTML, CSS
- FormsModule & RouterModule

---

## 🧠 Purpose

This project was created as a learning project to sharpen Angular development skills, particularly in:

- Creating and managing standalone components
- Using structural and attribute directives
- Handling user input with template-driven forms
- Managing conditional logic and state updates in a component

---

## 🛠️ How to Use the Application

1. **Enter Expense Name** – Type what the expense is for (e.g., "Dinner", "Snacks").
2. **Enter Amount** – Specify the total amount for that expense.
3. **Enter Number of People** – Input how many people are sharing that expense.
4. **Click "Add Expense"** – The expense will be added to the list, and totals will be updated.
5. If the number of people changes, you can choose to:
   - Continue with the same bill (adds new group as a separate entry)
   - Or start a new bill (resets previous data)
6. You can:
   - View the total amount
   - See how much each person should pay
   - Remove any item from the list
   - Click "Reset Bill" to clear all entries

💡 The app is ideal for quickly calculating per-person contributions in group spending scenarios.

---

## 📁 Project Structure

