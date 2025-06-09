// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  
import { ExpenseTrackerComponent } from './Project/expense-tracker/expense-tracker.component';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([{ path: 'Expense', component: ExpenseTrackerComponent }]),
    // provideRouter([{ path: 'pipes', component:  }]),
    provideHttpClient()
  ]
};

