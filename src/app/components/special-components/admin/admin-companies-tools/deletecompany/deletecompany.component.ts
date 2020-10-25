import { Company } from './../../../../../models/company.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.scss'],
})
export class DeletecompanyComponent implements OnInit {
  selectedCompany: Company;
  serverMessage: string;
  allCompanies: Company[];

  deleteCompanyFormProfile = this.formBuilder.group({
    company: [null],
  });
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getAllCompanies()
      .subscribe((response) => (this.allCompanies = response.t));
  }

  getSelectedCompany(name: string): Company {
    return this.allCompanies.find((company) => company.name === name);
  }

  setSelectCompany(selected: any): void {
    if (selected !== 'Choose Company') {
      this.selectedCompany = this.getSelectedCompany(
        this.deleteCompanyFormProfile.value.company
      );
    } else {
      this.selectedCompany = null;
    }
  }

  deleteCompany(): void {
    if (this.selectedCompany) {
      this.adminService.deleteCompany(this.selectedCompany.id).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService.getAllCompanies().subscribe((response) => {
            this.adminService.subjectForGetAllCompanies.next(response.t);
            this.allCompanies = response.t;
          });
          this.selectedCompany = null;
          this.deleteCompanyFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
