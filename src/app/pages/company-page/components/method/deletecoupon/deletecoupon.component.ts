import { Coupon } from './../../../../../models/coupon.module';
import { CompanyService } from 'src/app/services/method/company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deletecoupon',
  templateUrl: './deletecoupon.component.html',
  styleUrls: ['./deletecoupon.component.scss']
})
export class DeletecouponComponent implements OnInit {

  selectedCoupon: Coupon;
  serverMessage: string;
  allCoupons: Coupon[];

  deleteCouponFormProfile = this.formBuilder.group({
    couponTitle: [],
  });
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService
      .getCompanyCoupons()
      .subscribe((response) => (this.allCoupons = response.t));
  }

  getSelectedCoupon(title: string): Coupon {
    return this.allCoupons.find((coupon) => coupon.title === title);
  }

  setCoupon(selected: any): void {
    if (selected !== 'Choose Coupon') {
      this.selectedCoupon = this.getSelectedCoupon(
        this.deleteCouponFormProfile.value.couponTitle
      );
    } else {
      this.selectedCoupon = null;
    }
  }

  deleteCoupon(): void {
    if (this.selectedCoupon) {
      this.companyService.deleteCoupon(this.selectedCoupon.id).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.companyService.getCompanyCoupons().subscribe((response) => {
            this.companyService.subjectForGetAllCoupons.next(response.t);
            this.allCoupons = response.t;
          });
          this.selectedCoupon = null;
          this.deleteCouponFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
