import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company.module';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss'],
})
export class EditcompanyComponent implements OnInit {
  allCompanies: Company[];
  serverMessage: string;

  editCompanyFormProfile = this.formBuilder.group({
    company: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe((response) => {
      this.allCompanies = response.t;
    });
  }

  editCompany(): void {
    const companyIDandName = this.editCompanyFormProfile.value.company.split(':');
    if (this.editCompanyFormProfile.valid) {
      const company: Company = {
        id: companyIDandName[0],
        name: companyIDandName[1],
        email: this.editCompanyFormProfile.value.email,
        password: this.editCompanyFormProfile.value.password,
        coupons: [],
      };
      this.adminService.updateCompany(company).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService
            .getAllCompanies()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCompanies.next(response.t)
            );
          setTimeout(() => {
            this.serverMessage = null;
            this.editCompanyFormProfile.reset();
          }, 5000);
        }
      );
    }
  }
}
