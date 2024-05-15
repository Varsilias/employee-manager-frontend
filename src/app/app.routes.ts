import { Routes } from '@angular/router';
import { EmployeeListComponent } from './features/employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './features/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './features/employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './features/employee/employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: CreateEmployeeComponent },
  { path: 'employees/edit/:id', component: UpdateEmployeeComponent },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];
