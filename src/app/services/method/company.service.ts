import { Company } from 'src/app/models/company.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDto } from 'src/app/models/responseDto.module ';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Coupon } from 'src/app/models/coupon.module';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }


  getCompanyCoupons(): Observable<ResponseDto<Coupon[]>> {
    const url = `${baseUrl}/companies/details/coupons`;
    return this.httpClient.get<ResponseDto<Coupon[]>>(url);
  }

  getCompanyDetails(): Observable<ResponseDto<Company>> {
    const url = `${baseUrl}/companies/details/`;
    return this.httpClient.get<ResponseDto<Company>>(url);
  }


}
