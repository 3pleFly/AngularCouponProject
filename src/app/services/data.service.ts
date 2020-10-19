import { ResponseDto } from './../models/responseDto.module ';
import { Company } from './../models/company.module';
import { Coupon } from './../models/coupon.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Customer } from '../models/customer.module';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getAllCompanies(): Observable<ResponseDto<Company[]>> {
    const url = `${baseUrl}/admin/companies`;
    return this.httpClient.get<ResponseDto<Company[]>>(url);
  }

  getOneCustomer(): Observable<ResponseDto<Customer>> {
    const url = `${baseUrl}/customer/customer`;
    return this.httpClient.get<ResponseDto<Customer>>(url);
  }





  getCouponsStatic(): Coupon[] {
    let coupons: Coupon[];
    return (coupons = [
      {
        id: 0,
        company: 1,
        category: 1,
        title: 'Diving with Mammels',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 24.99,
        image: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 0,
        company: 1,
        category: 1,
        title: 'Hiking on Psychedelics',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 80.50,
        image: 'https://images.pexels.com/photos/2055556/pexels-photo-2055556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 0,
        company: 1,
        category: 1,
        title: 'Cycling Alone',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 9.99,
        image: 'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 0,
        company: 1,
        category: 1,
        title: 'Cycling Alone',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 9.99,
        image: 'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ]);
  }
}
