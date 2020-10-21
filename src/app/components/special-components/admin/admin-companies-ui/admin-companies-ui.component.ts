import { DataService } from './../../../../services/data.service';
import { AdminService } from './../../../../services/method/admin.service';
import { Company } from './../../../../models/company.module';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-companies-ui',
  templateUrl: './admin-companies-ui.component.html',
  styleUrls: ['./admin-companies-ui.component.scss'],
})
export class AdminCompaniesUiComponent implements OnInit {
  allCompanies: Company[];
  filterTerm;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe((response) => {
      this.allCompanies = response.t;
    });
    this.adminService.subjectForGetAllCompanies.subscribe((companies) => {
      this.allCompanies = companies;
    });
  }
}
