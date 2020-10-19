import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.scss']
})
export class CustomerSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  reRoute(routeTo: HTMLInputElement) {
    switch (routeTo.textContent) {
      case 'CustomerUI': this.router.navigate(['customer/customerui']);
        break;
      case 'Customers':
        break;
      case 'Categories':
        break;
      default:
        break;
    }
  }
}
