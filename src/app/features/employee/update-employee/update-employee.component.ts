import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../../types';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  updateEmployeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  employee!: IEmployee;
  isLoading = false;
  id!: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe((data) => {
      this.employee = data;
      this.updateEmployeeForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
    });
  }

  handleSubmit() {
    this.isLoading = true;
    this.employeeService
      .updateEmployee(this.id, this.updateEmployeeForm.value as IEmployee)
      .subscribe(
        () => {
          this.isLoading = false;
          this.goToHomePage();
        },
        (error) => console.log(error)
      );
  }

  goToHomePage() {
    return this.router.navigate(['/employees']);
  }
}
