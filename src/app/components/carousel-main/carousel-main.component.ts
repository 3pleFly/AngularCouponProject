import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.scss'],
})
export class CarouselMainComponent implements OnInit {
  images = [
    // {
    //   path:
    //     'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80',
    // },
    // {
    //   path:
    //     'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    // },
    // {
    //   path:
    //     'https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    // },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAllCoupons().subscribe((coupons) => {
      coupons.t.forEach((coupon) => {
        const path = { path: coupon.image };
        this.images.push(path);
      });
    });
  }
}
