import { Company } from './../../../../../models/company.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.scss'],
})
export class DeletecompanyComponent implements OnInit {
  serverMessage: string;
  allCompanies: Company[];

  deleteCompanyFormProfile = this.formBuilder.group({
    companyID: [null, Validators.required],
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

  deleteCompany(): void {
    if (this.deleteCompanyFormProfile.valid) {
      const companyID = this.deleteCompanyFormProfile.value.companyID.substring(
        0,
        1
      );
      this.adminService.deleteCompany(companyID).subscribe(
        (response) => (this.serverMessage = response.message),
        () => this,
        () => {
          this.adminService
            .getAllCompanies()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCompanies.next(response.t)
            );
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
