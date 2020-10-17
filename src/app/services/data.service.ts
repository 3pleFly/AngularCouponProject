import { Coupon } from './../models/coupon.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  // getCoupons(): Observable<Coupon[]> {
  //   const url = 'http://localhost:8080/public/coupons';
  //   return this.httpClient.get<Coupon[]>(url);
  // }

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
