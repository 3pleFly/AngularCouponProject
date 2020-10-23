import { Customer } from './../../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss'],
})
export class EditcustomerComponent implements OnInit {
  serverMessage: string;
  allCustomers: Customer[];
  selectedCustomer: Customer;

  editCustomerFormProfile = this.formBuilder.group({
    customer: [null, Validators.required],
    firstName: [null],
    lastName: [null],
    email: [null],
    password: [null],
  });
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getAllCustomers()
      .subscribe((response) => (this.allCustomers = response.t));
  }

  setCustomerInputDetails(selected: any): void {
    if (selected !== 'Choose Website') {
      this.selectedCustomer = this.getSelectedCustomer(
        this.editCustomerFormProfile.value.customer
      );
      this.editCustomerFormProfile.controls.firstName.setValue(
        this.selectedCustomer.firstName
      );
      this.editCustomerFormProfile.controls.lastName.setValue(
        this.selectedCustomer.lastName
      );
      this.editCustomerFormProfile.controls.email.setValue(
        this.selectedCustomer.email
      );
    }
  }

  getSelectedCustomer(firstAndLastName: string): Customer {
    return this.allCustomers.find(
      (customer) =>
        customer.firstName + ' ' + customer.lastName === firstAndLastName
    );
  }

  validateForm(): void {
    if (!this.editCustomerFormProfile.value.firstName) {
      this.editCustomerFormProfile.value.firstName = this.selectedCustomer.firstName;
    }

    if (!this.editCustomerFormProfile.value.lastName) {
      this.editCustomerFormProfile.value.lastName = this.selectedCustomer.lastName;
    }

    if (!this.editCustomerFormProfile.value.email) {
      this.editCustomerFormProfile.value.email = this.selectedCustomer.email;
    }
  }

  editCustomer(): void {
    this.validateForm();
    const customer: Customer = {
      id: this.selectedCustomer.id,
      firstName: this.editCustomerFormProfile.value.firstName,
      lastName: this.editCustomerFormProfile.value.lastName,
      email: this.editCustomerFormProfile.value.email,
      password: this.editCustomerFormProfile.value.password,
      coupons: [],
    };
    this.adminService.updateCustomer(customer).subscribe(
      (response) => (this.serverMessage = response.message),
      (error) => (this.serverMessage = error.error.message),
      () => {
        this.adminService.getAllCustomers().subscribe((response) => {
          this.adminService.subjectForGetAllCustomers.next(response.t);
          this.allCustomers = response.t;
        });
        this.editCustomerFormProfile.reset();
        this.selectedCustomer = null;
        setTimeout(() => {
          this.serverMessage = null;

        }, 5000);
      }
    );
  }
}
