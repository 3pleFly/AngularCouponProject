import { CompanyService } from './../../../../../services/method/company.service';
import { Company } from 'src/app/models/company.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-main-ui',
  templateUrl: './company-main-ui.component.html',
  styleUrls: ['./company-main-ui.component.scss'],
})
export class CompanyMainUiComponent implements OnInit {
  signedInCompany: Company;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService
      .getCompanyDetails()
      .subscribe((response) => (this.signedInCompany = response.t));
  }
}
