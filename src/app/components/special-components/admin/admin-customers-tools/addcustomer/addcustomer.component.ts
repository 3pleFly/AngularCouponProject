import { Customer } from '../../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  serverMessage: string;

  addCustomerFormProfile = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  addCustomer(): void {
    if (this.addCustomerFormProfile.valid) {
      const customer: Customer = {
        id: 0,
        firstName: this.addCustomerFormProfile.value.firstName,
        lastName: this.addCustomerFormProfile.value.lastName,
        email: this.addCustomerFormProfile.value.email,
        password: this.addCustomerFormProfile.value.password,
        coupons: [],
      };
      this.adminService.addCustomer(customer).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => {
          this.serverMessage = error;
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        },
        () => {
          this.adminService
            .getAllCustomers()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCustomers.next(response.t)
            );
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
