import { Component } from '@angular/core';
// This import is used to create a component in Angular.

import { FormsModule } from '@angular/forms';
// FormsModule is used to access ngModel for two-way data binding in Angular. 

import { CommonModule } from '@angular/common';
// This import is used to access common directives like ngIf, ngFor, etc.

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  // Define properties for the component
  sortOption = '';
  taskInput = '';
  taskDate = '';
  filter = '';

  // Initialize the tasks array with some default tasks
  tasks = [
    { title: 'Angular', date: '2024-06-05', done: false, priority: 'high', isEditing: false },
    { title: 'CICD', date: '2024-06-05', done: false, priority: 'low', isEditing: false }
  ];

  //addTasks method to add new tasks
  addTasks() {
    //if the task input and date are not empty, add the task to the tasks array and reset the input fields
    if (this.taskInput.trim() && this.taskDate.trim()) {
      //push - used to add a new task object to the tasks array
      this.tasks.push({ title: this.taskInput, date: this.taskDate, done: false, priority: 'medium', isEditing: false });
      this.taskInput = '';
      this.taskDate = '';
    }
  }

  //toggleEditTask method to toggle the edit mode of a task
  toggleEditTask(i: number) {
    this.tasks[i].isEditing = !this.tasks[i].isEditing;
  }

  //removeTask method to remove a task from the tasks array with confirmation
  removeTask(i: number) {
    const confirmation = confirm('Are you sure you want to delete this task?');
    if (confirmation) {
      this.tasks.splice(i, 1);
    }
  }

  //toggleTask method to toggle the done status of a task
  toggleTask(i: number) {
    this.tasks[i].done = !this.tasks[i].done;
  }

  //clearCompletedTasks method to filter out completed tasks
  clearCompletedTasks() {
    //filter out the completed tasks and update the tasks array
    this.tasks = this.tasks.filter(task => !task.done);
  }

  //get filteredTasks method to filter tasks based on the all, completed, or pending status
  get filteredTasks() {

    if (this.filter === 'all') return this.tasks;
    if (this.filter === 'completed') return this.tasks.filter(task => task.done);
    if (this.filter === 'pending') return this.tasks.filter(task => !task.done);

    return this.tasks;

  }

    //getSortedTasks method to sort tasks based on the date or priority
  getSortedTasks() {
    
    const sorted = [...this.filteredTasks];

    if (this.sortOption === 'date') {
      sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (this.sortOption === 'priority') {
      const priorityOrder: any = { high: 1, medium: 2, low: 3 };
      sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }

    return sorted;
  }

}
