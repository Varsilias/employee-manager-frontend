import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly baseURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(`${this.baseURL}/employees`);
  }

  createEmployee(employee: Omit<IEmployee, 'id'>): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/employees`, employee, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(
    id: number,
    employee: Omit<IEmployee, 'id'>
  ): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/employees/${id}`, employee, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/employees/${id}`);
  }
}
