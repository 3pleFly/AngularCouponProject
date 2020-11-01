import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-coupons',
  templateUrl: './display-coupons.component.html',
  styleUrls: ['./display-coupons.component.scss'],
})
export class DisplayCouponsComponent implements OnInit {
  displayCoupons: Coupon[] = [];
  allCoupons: Coupon[];
  couponsIndexToDisplay: number;
  selectedCoupon: Coupon;
  signedIn: boolean;
  purchaseErrorMesage: string;

  constructor(
    private dataService: DataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.couponsIndexToDisplay = this.getNumberOfCouponsToDisplay();

    this.dataService.getAllCoupons().subscribe((response) => {
      this.allCoupons = response.t;
      for (let index = 0; index < this.couponsIndexToDisplay; index++) {
        this.displayCoupons.push(this.allCoupons[index]);
      }
    });

    this.dataService.subjectForSortingShowcaseCoupons.subscribe((coupons) => {
      this.selectedCoupon = null;
      this.displayCoupons = [];
      for (let index = 0; index < this.couponsIndexToDisplay; index++) {
        this.displayCoupons.push(coupons[index]);
      }
    });

    this.dataService.subjectForCategoryDisplay.subscribe((category) => {
      this.selectedCoupon = null;
      this.displayCoupons = [];
      if (category.category === 'showAll') {
        this.allCoupons.forEach((coupon) => {
          this.displayCoupons.push(coupon);
        });
      } else {
        this.displayCoupons = this.allCoupons.filter(
          (coupon) => coupon.categoryID === category.id
        );
      }
    });
  }

  shuffle(): void {
    this.selectedCoupon = null;
    this.displayCoupons = [];
    for (let index = 0; index < this.couponsIndexToDisplay; index++) {
      const randomIndexFromAllCoupons = Math.floor(
        Math.random() * this.allCoupons.length
      );
      if (
        this.displayCoupons.includes(this.allCoupons[randomIndexFromAllCoupons])
      ) {
        index--;
      } else {
        this.displayCoupons.push(this.allCoupons[randomIndexFromAllCoupons]);
      }
    }
  }

  purchaseCoupon(): void {
    if (this.authService.isLoggedIn()) {
      if (this.authService.getTokenScopeFromStorage() !== 'customer') {
        this.purchaseErrorMesage = 'Please login as a customer';
      }
    } else {
      this.purchaseErrorMesage = 'Please login first';
    }
    setTimeout(() => {
      this.purchaseErrorMesage = null;
    }, 1500);
  }

  selectCoupon(coupon: Coupon): void {
    this.displayCoupons = [];
    this.selectedCoupon = coupon;
  }

  getNumberOfCouponsToDisplay(): number {
    const screenWidth = screen.width;
    if (screenWidth > 250) {
      if (screenWidth > 630) {
        if (screenWidth > 1580) {
          if (screenWidth > 1876) {
            if (screenWidth > 2190) {
              return 7;
            }
            return 6;
          }
          return 5;
        }
        return 4;
      }
    }
    return 2;
  }
}
