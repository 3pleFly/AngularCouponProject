import { Customer } from './../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.module';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-admin-customers-ui',
  templateUrl: './admin-customers-ui.component.html',
  styleUrls: ['./admin-customers-ui.component.scss']
})
export class AdminCustomersUiComponent implements OnInit {
  allCustomers: Customer[];
  filterTerm;

  constructor(
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((response) => {
      this.allCustomers = response.t;
    });
    this.adminService.subjectForGetAllCustomers.subscribe((customers) => {
      this.allCustomers = customers;
    });
  }

}
