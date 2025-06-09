import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Expense interface acts as a model for expense data
// Defines the structure of each expense object
interface Expense {
  name: string;
  amount: number | any;  // Using any to handle initial null values, ideally number only
  payer: number | any;   // Same as above
}

@Component({
  selector: 'app-expense-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import CommonModule for directives like *ngIf, *ngFor; FormsModule for ngModel binding
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css'],
})

//CommonModule=This module will be seen when user wants to use ngIf,ngFor and like other directives
//The directives means the keyword /elements which can be directly gets used in Template(in HTML)
//There are two types of Directive
//Structural Directives = It is responsible for strctures and there manipulations like ngIf and ngFor
//Component Directives = In this component will get created by user
//Attribute Directive=The Directive which works on Attribute like ngStyle and ngClass

export class ExpenseTrackerComponent implements OnInit, OnDestroy {

  // List to store all expenses added by user
  expenses: Expense[] = [];

  // Total sum of all expenses
  total: number = 0;

  // Amount each person needs to pay after splitting the total
  splitAmount: number = 0;

  // Model for binding new expense form input values
  newExpense: Expense = { name: '', amount: null, payer: null };

  // Flags and variables for managing bill state
  billStarted: boolean = false;          // Has any bill started yet?
  numPeople: number | null = null;       // Number of people splitting the bill
  continueWithCurrent: boolean | null = null; // User decision to continue or reset bill

  constructor() { }

  // Lifecycle hook - runs when component is initialized
  ngOnInit(): void {
    console.log('Bill Splitting Component Initialized');
  }

  // Lifecycle hook - runs when component is destroyed
  ngOnDestroy(): void {
    console.log('Bill Splitting Component Destroyed');
  }

  // Method to add a new expense to the list
  addExpense(): void {

    console.log('New Expense Input:', this.newExpense);

    // Validate inputs: name cannot be empty, amount and payer must be positive numbers
    if (!this.newExpense.name.trim() || this.newExpense.amount <= 0 || this.newExpense.payer <= 0) {
      alert('⚠️ Please enter valid expense details.');
      return;
    }

    // If bill not started, initialize the bill with the number of people from this expense
    if (!this.billStarted || this.numPeople === null) {
      this.billStarted = true;
      this.numPeople = this.newExpense.payer;
      this.continueWithCurrent = null;
      console.log('New bill started with numPeople:', this.numPeople);
    } else {
      // If bill started but new expense has different number of people
      if (this.newExpense.payer !== this.numPeople) {

        console.log(this.newExpense.payer);
        console.log(this.numPeople);
        this.billStarted = true;

        // Ask user if they want to continue with the same bill or start a new one
        const userChoice = confirm('Do you want to continue with the same bill? Click "OK" for Yes or "Cancel" to start a new bill.');
        console.log(userChoice);

        if (!userChoice) {
          // User chose to start a new bill, so reset and start fresh
          this.startNewBill();
          this.numPeople = this.newExpense.payer;
          this.billStarted = true;
          this.continueWithCurrent = null;
          console.log('New bill started after reset with numPeople:', this.numPeople);

        } else {
          // User chose to continue with current bill despite different payer count
          alert(`The number of people does not remain consistent. Current bill is for ${this.newExpense.payer} people.`);

          // Add the expense anyway
          const expenseToAdd: Expense = {
            name: this.newExpense.name.trim(),
            amount: +this.newExpense.amount,
            payer: +this.newExpense.payer,
          };

          this.billStarted = true;
          this.continueWithCurrent = null;

          this.expenses.push(expenseToAdd);
          console.log('Expense added:', expenseToAdd);
          this.calculateTotal();
          this.newExpense = { name: '', amount: null, payer: null };
          return;
        }
      }
    }

    // If number of people matches or bill just started, add expense normally
    const expenseToAdd: Expense = {
      name: this.newExpense.name.trim(),
      amount: +this.newExpense.amount,
      payer: +this.newExpense.payer,
    };

    this.expenses.push(expenseToAdd);
    console.log('Expense added:', expenseToAdd);

    // Update total and split amounts
    this.calculateTotal();

    // Reset newExpense model for next input
    this.newExpense = { name: '', amount: null, payer: null };
  }

  // Method to remove an expense by index from the list
  removeExpense(index: number): void {
    this.expenses.splice(index, 1);
    this.calculateTotal();
    this.newExpense.payer = 0;
  }

  // Calculate total of expenses and split amount per person
  calculateTotal(): void {
    this.total = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    this.splitAmount = this.numPeople ? this.total / this.numPeople : 0;
    console.log('Total:', this.total, 'Split Amount:', this.splitAmount);
  }

  // Handle user choice to continue with current bill or start a new one
  setContinueBill(choice: boolean): void {
    this.continueWithCurrent = choice;
    if (!choice) {
      this.startNewBill();
    }
  }

  // Reset all variables and clear expenses to start a new bill
  startNewBill(): void {
    console.log('Starting new bill...');
    this.expenses = []; // Clear all expenses
    this.total = 0;
    this.splitAmount = 0;
    this.billStarted = true;
    this.numPeople = this.newExpense.payer; // Reset with new number of payers
    this.continueWithCurrent = null;
    console.log('New bill started with numPeople:', this.numPeople);
  }

  // Reset the entire bill state, used when user wants to clear all data
  resetBill(): void {
    this.expenses = [];
    this.total = 0;
    this.splitAmount = 0;
    this.billStarted = false;
    this.numPeople = null;
    this.continueWithCurrent = null;
    this.newExpense = { name: '', amount: null, payer: null };
  }
}
