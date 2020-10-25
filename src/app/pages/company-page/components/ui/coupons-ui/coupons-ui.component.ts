import { DataService } from 'src/app/services/data.service';
import { CompanyService } from './../../../../../services/method/company.service';
import { Coupon } from 'src/app/models/coupon.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons-ui',
  templateUrl: './coupons-ui.component.html',
  styleUrls: ['./coupons-ui.component.scss'],
})
export class CouponsUiComponent implements OnInit {
  filterTerm;
  allCoupons: Coupon[];

  constructor(
    private companyService: CompanyService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.companyService
      .getCompanyCoupons()
      .subscribe((response) => (this.allCoupons = response.t));
    this.dataService.getAllCategories().subscribe((response) => {
      this.allCoupons.forEach((coupon) => {
        response.t.forEach((category) => {
          if (coupon.categoryID === category.id) {
            coupon.categoryName = category.category;
          }
        });
      });
    });
  }
}
