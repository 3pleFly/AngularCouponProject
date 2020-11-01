import { Category } from './../../../../../models/category.module';
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
  showCategoryBox: boolean;
  showPriceBox: boolean;
  selectedCategory: Category;
  allCategories: Category[];

  constructor(
    private companyService: CompanyService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanyCoupons().subscribe((response) => {
      this.allCoupons = response.t;
      this.dataService
        .getAllCategories()
        .subscribe((getAllCategoriesResponse) => {
          this.allCoupons.forEach((coupon) => {
            getAllCategoriesResponse.t.forEach((category) => {
              if (coupon.categoryID === category.id) {
                coupon.categoryName = category.category;
              }
            });
          });
        });
    });

    this.companyService.subjectForGetAllCoupons.subscribe((coupons) => {
      this.allCoupons = coupons;
      this.dataService
        .getAllCategories()
        .subscribe((getAllCategoriesResponse) => {
          this.allCoupons.forEach((coupon) => {
            getAllCategoriesResponse.t.forEach((category) => {
              if (coupon.categoryID === category.id) {
                coupon.categoryName = category.category;
              }
            });
          });
        });
    });

    this.dataService
      .getAllCategories()
      .subscribe((response) => (this.allCategories = response.t));
  }

  showByCategory(): void {
    this.showPriceBox = false;
    this.showCategoryBox = true;
  }

  showByPrice(): void {
    this.showPriceBox = true;
    this.showCategoryBox = false;
  }

  getCategory(categoryName: string): Category {
    return this.allCategories.find(
      (category) => category.category === categoryName
    );
  }

  setCategory(selected: any): void {
    if (selected !== 'Choose Category') {
      let category = this.getCategory(selected);
      this.filterByCategory(category);
    }
  }

  filterAllCoupons(): void {
    this.showPriceBox = false;
    this.showCategoryBox = false;
    this.companyService
      .getCompanyCoupons()
      .subscribe((response) =>
        this.companyService.subjectForGetAllCoupons.next(response.t)
      );
  }

  filterByCategory(category: Category): void {
    this.companyService
      .getCompanyCouponsByCategory(category.id)
      .subscribe((response) =>
        this.companyService.subjectForGetAllCoupons.next(response.t)
      );
  }

  filterByMaxPrice(price: HTMLInputElement): void {
    if (price.value) {
      const maxPrice = parseInt(price.value, 10);
      this.companyService
        .getCompanyCouponsByMaxPrice(maxPrice)
        .subscribe((response) =>
          this.companyService.subjectForGetAllCoupons.next(response.t)
        );
    }
  }
}
