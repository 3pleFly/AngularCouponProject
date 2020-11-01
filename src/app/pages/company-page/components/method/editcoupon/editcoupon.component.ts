import { Category } from './../../../../../models/category.module';
import { Coupon } from './../../../../../models/coupon.module';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/models/company.module';
import { DataService } from 'src/app/services/data.service';
import { CompanyService } from 'src/app/services/method/company.service';

@Component({
  selector: 'app-editcoupon',
  templateUrl: './editcoupon.component.html',
  styleUrls: ['./editcoupon.component.scss'],
})
export class EditcouponComponent implements OnInit {
  serverMessage: string;
  allCoupons: Coupon[];
  allCategories: Category[];
  currentCompany: Company;
  selectedCategory: Category;
  selectedCoupon: Coupon;

  editCouponFormProfile = this.formBuilder.group({
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
    this.companyService
      .getCompanyCoupons()
      .subscribe((response) => (this.allCoupons = response.t));
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

  setCouponInputDetails(selected: any): void {
    if (selected !== 'Choose Coupon') {
      this.selectedCoupon = this.getSelectedCoupon(selected);

      // this.editCouponFormProfile.controls.categoryName.setValue(
      //     this.getCategory(this.selectedCoupon.categoryID).category
      // );
      this.editCouponFormProfile.controls.title.setValue(
        this.selectedCoupon.title
      );
      this.editCouponFormProfile.controls.description.setValue(
        this.selectedCoupon.description
      );
      this.editCouponFormProfile.controls.startDate.setValue(
        this.selectedCoupon.startDate
      );
      this.editCouponFormProfile.controls.endDate.setValue(
        this.selectedCoupon.endDate
      );
      this.editCouponFormProfile.controls.amount.setValue(
        this.selectedCoupon.amount
      );
      this.editCouponFormProfile.controls.price.setValue(
        this.selectedCoupon.price
      );
      this.editCouponFormProfile.controls.image.setValue(
        this.selectedCoupon.image
      );
    } else {
      this.selectedCoupon = null;
    }
  }

  getSelectedCoupon(title: string): Coupon {
    return this.allCoupons.find((coupon) => coupon.title === title);
  }

  editCoupon(): void {
    if (this.editCouponFormProfile.valid && this.selectedCategory) {
      const coupon: Coupon = {
        id: this.selectedCoupon.id,
        companyID: this.selectedCoupon.id,
        categoryID: this.selectedCategory.id,
        title: this.editCouponFormProfile.value.title,
        description: this.editCouponFormProfile.value.description,
        startDate: this.editCouponFormProfile.value.startDate,
        endDate: this.editCouponFormProfile.value.endDate,
        amount: this.editCouponFormProfile.value.amount,
        price: this.editCouponFormProfile.value.price,
        image: this.editCouponFormProfile.value.image,
        categoryName: this.selectedCategory.category,
      };
      this.companyService.updateCoupon(coupon).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.companyService.getCompanyCoupons().subscribe((response) => {
            this.companyService.subjectForGetAllCoupons.next(response.t);
            this.allCoupons = response.t;
          });
          this.selectedCoupon = null;
          this.editCouponFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
