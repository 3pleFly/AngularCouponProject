import { DataService } from './../../services/data.service';
import { Coupon } from './../../models/coupon.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  coupons: Coupon[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.coupons = this.dataService.getCouponsStatic();
  }
}
