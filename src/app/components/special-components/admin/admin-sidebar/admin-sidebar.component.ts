import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  reRoute(routeTo: HTMLInputElement) {
    switch (routeTo.textContent) {
      case 'Companies': this.router.navigate(['admin/companiesui']);
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
