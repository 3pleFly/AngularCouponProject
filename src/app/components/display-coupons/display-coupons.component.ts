import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-coupons',
  templateUrl: './display-coupons.component.html',
  styleUrls: ['./display-coupons.component.scss']
})
export class DisplayCouponsComponent implements OnInit {
  coupons: Coupon[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.coupons = this.dataService.getCouponsStatic();
  }

}
