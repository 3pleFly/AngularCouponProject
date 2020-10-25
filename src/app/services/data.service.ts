import { Category } from './../models/category.module';
import { ResponseDto } from './../models/responseDto.module ';
import { Company } from './../models/company.module';
import { Coupon } from './../models/coupon.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Customer } from '../models/customer.module';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  subjectForFeatureCompany: Subject<number> = new Subject();

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ResponseDto<Category[]>> {
    const url = `${baseUrl}/public/categories`;
    return this.httpClient.get<ResponseDto<Category[]>>(url);
  }

  getOneCustomer(): Observable<ResponseDto<Customer>> {
    const url = `${baseUrl}/customers/customer`;
    return this.httpClient.get<ResponseDto<Customer>>(url);
  }

  getOneCompany(companyID: number): Observable<ResponseDto<Company>> {
    const url = `${baseUrl}/admin/company/${companyID}`;
    return this.httpClient.get<ResponseDto<Company>>(url);
  }

  featureCompany(companyID: any): void {
    this.subjectForFeatureCompany.next(companyID);
  }

  getCouponsStatic(): Coupon[] {
    let coupons: Coupon[];
    return (coupons = [
      {
        id: 0,
        companyID: 1,
        categoryID: 1,
        categoryName: '',
        title: 'Diving with Mammels',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 24.99,
        image:
          'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 0,
        companyID: 1,
        categoryID: 1,
        categoryName: '',
        title: 'Hiking on Psychedelics',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 80.5,
        image:
          'https://images.pexels.com/photos/2055556/pexels-photo-2055556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: 0,
        companyID: 1,
        categoryID: 1,
        categoryName: '',
        title: 'Cycling Alone',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 9.99,
        image:
          'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        id: 0,
        companyID: 1,
        categoryID: 1,
        categoryName: '',
        title: 'Cycling Alone',
        description: 'dancing in the water',
        startDate: new Date(),
        endDate: new Date(),
        amount: 1,
        price: 9.99,
        image:
          'https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ]);
  }
}
