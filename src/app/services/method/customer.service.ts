import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.module';
import { ResponseDto } from 'src/app/models/responseDto.module';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {}

  getCustomerDetails(): Observable<ResponseDto<Customer>> {
    const url = `${baseUrl}/customers/details`;
    return this.httpClient.get<ResponseDto<Customer>>(url);
  }
}
