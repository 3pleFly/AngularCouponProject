import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.scss']
})
export class DeletecustomerComponent implements OnInit {

  deleteCustomerFormProfile = this.formBuilder.group({
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
  }

  deleteCustomer() {

  }

}
