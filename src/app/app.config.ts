import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  
import { ExpenseTrackerComponent } from './Project/expense-tracker/expense-tracker.component';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([{ path: 'Expense', component: ExpenseTrackerComponent }]),
    provideHttpClient()
  ]
};
