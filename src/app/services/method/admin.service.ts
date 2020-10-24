import { Category } from './../../models/category.module';
import { Customer } from './../../models/customer.module';
import { Observable, Subject } from 'rxjs';
import { Company } from './../../models/company.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { ResponseDto } from 'src/app/models/responseDto.module ';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  subjectForGetAllCompanies: Subject<Company[]> = new Subject();
  subjectForGetAllCustomers: Subject<Customer[]> = new Subject();
  subjectForGetAllCategories: Subject<Category[]> = new Subject();

  constructor(private httpClient: HttpClient) {}

  addCompany(company: Company): Observable<ResponseDto<Company>> {
    const url = `${baseUrl}/admin/addcompany`;
    return this.httpClient.post<ResponseDto<Company>>(url, company);
  }

  updateCompany(company: Company): Observable<ResponseDto<Company>> {
    const url = `${baseUrl}/admin/updatecompany`;
    return this.httpClient.put<ResponseDto<Company>>(url, company);
  }

  deleteCompany(companyID: number): Observable<ResponseDto<string>> {
    const url = `${baseUrl}/admin/deletecompany/${companyID}`;
    return this.httpClient.delete<ResponseDto<string>>(url);
  }

  getAllCompanies(): Observable<ResponseDto<Company[]>> {
    const url = `${baseUrl}/admin/companies`;
    return this.httpClient.get<ResponseDto<Company[]>>(url);
  }

  addCustomer(customer: Customer): Observable<ResponseDto<Customer>> {
    const url = `${baseUrl}/admin/addcustomer`;
    return this.httpClient.post<ResponseDto<Customer>>(url, customer);
  }

  updateCustomer(customer: Customer): Observable<ResponseDto<Customer>> {
    const url = `${baseUrl}/admin/updatecustomer`;
    return this.httpClient.put<ResponseDto<Customer>>(url, customer);
  }

  deleteCustomer(customerID: number): Observable<ResponseDto<string>> {
    const url = `${baseUrl}/admin/deletecustomer/${customerID}`;
    return this.httpClient.delete<ResponseDto<string>>(url);
  }

  addCategory(category: Category): Observable<ResponseDto<Category>> {
    const url = `${baseUrl}/admin/addcategory`;
    return this.httpClient.post<ResponseDto<Category>>(url, category);
  }

  updateCategory(category: Category): Observable<ResponseDto<Category>> {
    const url = `${baseUrl}/admin/updatecategory`;
    return this.httpClient.put<ResponseDto<Category>>(url, category);
  }

  deleteCategory(categoryID: number): Observable<ResponseDto<string>> {
    const url = `${baseUrl}/admin/deletecategory/${categoryID}`;
    return this.httpClient.delete<ResponseDto<string>>(url);
  }

  getAllCustomers(): Observable<ResponseDto<Customer[]>> {
    const url = `${baseUrl}/admin/customers`;
    return this.httpClient.get<ResponseDto<Customer[]>>(url);
  }

  getAllCategories(): Observable<ResponseDto<Category[]>> {
    const url = `${baseUrl}/admin/categories`;
    return this.httpClient.get<ResponseDto<Category[]>>(url);
  }


}
