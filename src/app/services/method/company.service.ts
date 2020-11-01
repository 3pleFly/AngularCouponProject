import { Coupon } from './../../models/coupon.module';
import { Company } from 'src/app/models/company.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from 'src/app/models/responseDto.module';
import { Observable, Subject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  subjectForGetAllCoupons: Subject<Coupon[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  addCoupon(coupon: Coupon): Observable<ResponseDto<Coupon>> {
    const url = `${baseUrl}/companies/addcoupon`;
    return this.httpClient.post<ResponseDto<Coupon>>(url, coupon);
  }

  updateCoupon(coupon: Coupon): Observable<ResponseDto<Coupon>> {
    const url = `${baseUrl}/companies/updatecoupon`;
    return this.httpClient.put<ResponseDto<Coupon>>(url, coupon);
  }

  deleteCoupon(couponID: number): Observable<ResponseDto<string>> {
    const url = `${baseUrl}/companies/deletecoupon/${couponID}`;
    return this.httpClient.delete<ResponseDto<string>>(url);
  }

  getCompanyCoupons(): Observable<ResponseDto<Coupon[]>> {
    const url = `${baseUrl}/companies/details/coupons`;
    return this.httpClient.get<ResponseDto<Coupon[]>>(url);
  }

  getCompanyCouponsByCategory(categoryID: number): Observable<ResponseDto<Coupon[]>> {
    const url = `${baseUrl}/companies/details/coupons/category/${categoryID}`;
    return this.httpClient.get<ResponseDto<Coupon[]>>(url);
  }

  getCompanyCouponsByMaxPrice(maxprice: number): Observable<ResponseDto<Coupon[]>> {
    const url = `${baseUrl}/companies/details/coupons/price/${maxprice}`;
    return this.httpClient.get<ResponseDto<Coupon[]>>(url);
  }

  getCompanyDetails(): Observable<ResponseDto<Company>> {
    const url = `${baseUrl}/companies/details/`;
    return this.httpClient.get<ResponseDto<Company>>(url);
  }


}
