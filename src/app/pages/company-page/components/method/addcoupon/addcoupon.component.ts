import { Company } from './../../../../../models/company.module';
import { Category } from './../../../../../models/category.module';
import { DataService } from './../../../../../services/data.service';
import { Coupon } from './../../../../../models/coupon.module';
import { CompanyService } from './../../../../../services/method/company.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.scss'],
})
export class AddcouponComponent implements OnInit {
  serverMessage: string;
  allCoupons: Coupon[];
  allCategories: Category[];
  currentCompany: Company;
  selectedCategory: Category;

  addCouponFormProfile = this.formBuilder.group({
    categoryName: [null, Validators.required],
    title: [null, Validators.required],
    description: [null],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    amount: [null, Validators.required],
    price: [null, Validators.required],
    image: [null],
  });
  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getAllCategories()
      .subscribe((response) => (this.allCategories = response.t));
    this.companyService
      .getCompanyDetails()
      .subscribe((response) => (this.currentCompany = response.t));
  }

  setCategory(selected: any): void {
    if (selected !== 'Choose Category') {
      this.selectedCategory = this.allCategories.find(
        (category) => category.category === selected
      );
    } else {
      this.selectedCategory = null;
    }
  }

  addCoupon(): void {
    if (this.addCouponFormProfile.valid && this.selectedCategory) {
      const coupon: Coupon = {
        id: null,
        companyID: this.currentCompany.id,
        categoryID: this.selectedCategory.id,
        title: this.addCouponFormProfile.value.title,
        description: this.addCouponFormProfile.value.description,
        startDate: this.addCouponFormProfile.value.startDate,
        endDate: this.addCouponFormProfile.value.endDate,
        amount: this.addCouponFormProfile.value.amount,
        price: this.addCouponFormProfile.value.price,
        image: this.addCouponFormProfile.value.image,
        categoryName: this.selectedCategory.category,
      };
      this.companyService.addCoupon(coupon).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.companyService.getCompanyCoupons().subscribe((response) => {
            this.companyService.subjectForGetAllCoupons.next(response.t);
            this.allCoupons = response.t;
          });
          this.addCouponFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
