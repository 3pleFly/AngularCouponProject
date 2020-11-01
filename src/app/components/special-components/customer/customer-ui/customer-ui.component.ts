import { CustomerService } from './../../../../services/method/customer.service';
import { Customer } from './../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.scss'],
})
export class CustomerUiComponent implements OnInit {
  loggedInCustomer: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .getCustomerDetails()
      .subscribe((response) => (this.loggedInCustomer = response.t));
  }
}
