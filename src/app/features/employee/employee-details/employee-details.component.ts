import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../../types';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: IEmployee;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isLoading = true;
    this.employeeService.getEmployee(this.id).subscribe((data) => {
      console.log(data);

      this.employee = data;
      this.isLoading = false;
    });
  }
}
