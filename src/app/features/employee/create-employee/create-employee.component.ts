import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IEmployee } from '../../../types';
import { EmployeeService } from '../../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  createEmployeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  isLoading = false;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  goToHomePage() {
    return this.router.navigate(['/employees']);
  }

  saveEmployee() {
    this.employeeService
      .createEmployee(this.createEmployeeForm.value as IEmployee)
      .subscribe(
        (data) => {
          this.isLoading = false;
          console.log(data);
          this.goToHomePage();
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
  }
  handleSubmit() {
    console.log(this.createEmployeeForm.value);
    this.saveEmployee();
  }
}
