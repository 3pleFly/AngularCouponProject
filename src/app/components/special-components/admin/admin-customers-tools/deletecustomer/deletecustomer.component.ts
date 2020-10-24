import { Customer } from './../../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.scss']
})
export class DeletecustomerComponent implements OnInit {
  selectedCustomer: Customer;
  serverMessage: string;
  allCustomers: Customer[];

  deleteCustomerFormProfile = this.formBuilder.group({
    customer: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getAllCustomers()
      .subscribe((response) => (this.allCustomers = response.t));
  }

  getSelectedCustomer(name: string[]): Customer {
    return this.allCustomers.find((customer) =>
    customer.firstName === name[0] && customer.lastName === name[1]);
  }

  setSelectedCustomer(selected: any): void {
    const firstNameAndLastName = this.deleteCustomerFormProfile.value.customer.split(' ');
    if (selected !== 'Choose Customer') {
      this.selectedCustomer = this.getSelectedCustomer(firstNameAndLastName);
    } else {
      this.selectedCustomer = null;
    }
  }

  deleteCustomer(): void {
    if (this.selectedCustomer) {
      this.adminService.deleteCustomer(this.selectedCustomer.id).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService
            .getAllCustomers()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCustomers.next(response.t)
            );
          this.selectedCustomer = null;
          this.deleteCustomerFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }

}
