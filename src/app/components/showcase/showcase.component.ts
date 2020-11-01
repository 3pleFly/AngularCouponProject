import { Subject } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Coupon } from './../../models/coupon.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  allCoupons: Coupon[];
  latestCoupons: Coupon[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getAllCoupons()
      .subscribe((response) => (this.allCoupons = response.t));
  }

  sortByLatest(): void {
    this.latestCoupons = this.allCoupons
      .sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      )
      .reverse();
    this.dataService.subjectForSortingShowcaseCoupons.next(this.latestCoupons);
  }

  sortByMostBought(): void {}

  sortByCheapest(): void {
    this.latestCoupons = this.allCoupons
      .sort((a, b) => b.price - a.price)
      .reverse();
    this.dataService.subjectForSortingShowcaseCoupons.next(this.latestCoupons);
  }
}
