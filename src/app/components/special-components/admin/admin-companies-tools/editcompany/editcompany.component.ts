import { Company } from './../../../../../models/company.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss'],
})
export class EditcompanyComponent implements OnInit {
  serverMessage: string;
  allCompanies: Company[];
  selectedCompany: Company;

  editCompanyFormProfile = this.formBuilder.group({
    company: [null],
    name: ['', Validators.maxLength(30)],
    email: [null, Validators.maxLength(100)],
    password: [null, Validators.maxLength(200)],
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

  setCompanyInputDetails(selected: any): void {
    if (selected !== 'Choose Company') {
      this.selectedCompany = this.getSelectedCompany(
        this.editCompanyFormProfile.value.company
      );
      this.editCompanyFormProfile.controls.name.setValue(
        this.selectedCompany.name
      );
      this.editCompanyFormProfile.controls.email.setValue(
        this.selectedCompany.email
      );
    } else {
      this.selectedCompany = null;
    }
  }

  getSelectedCompany(name: string): Company {
    return this.allCompanies.find((company) => company.name === name);
  }

  validateForm(): boolean {
    if (this.selectedCompany !== null) {
      if (!this.editCompanyFormProfile.value.firstName) {
        this.editCompanyFormProfile.value.firstName = this.selectedCompany.name;
      }

      if (!this.editCompanyFormProfile.value.email) {
        this.editCompanyFormProfile.value.email = this.selectedCompany.email;
      }
      return true;
    }
    return false;
  }

  editCompany(): void {
    const formValidity = this.validateForm();

    if (formValidity) {
      const company: Company = {
        id: this.selectedCompany.id,
        name: this.editCompanyFormProfile.value.firstName,
        email: this.editCompanyFormProfile.value.email,
        password: this.editCompanyFormProfile.value.password,
        coupons: [],
      };

      this.adminService.updateCompany(company).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService.getAllCompanies().subscribe((response) => {
            this.adminService.subjectForGetAllCompanies.next(response.t);
            this.allCompanies = response.t;
          });
          this.editCompanyFormProfile.reset();
          this.selectedCompany = null;
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }

  // allCompanies: Company[];
  // serverMessage: string;

  // editCompanyFormProfile = this.formBuilder.group({
  //   company: [null, Validators.required],
  //   email: [null, Validators.required],
  //   password: [null, Validators.required],
  // });
  // constructor(
  //   private dataService: DataService,
  //   private formBuilder: FormBuilder,
  //   private adminService: AdminService
  // ) {}

  // ngOnInit(): void {
  //   this.adminService.getAllCompanies().subscribe((response) => {
  //     this.allCompanies = response.t;
  //   });
  // }

  // editCompany(): void {
  //   const companyIDandName = this.editCompanyFormProfile.value.company.split(':');
  //   if (this.editCompanyFormProfile.valid) {
  //     const company: Company = {
  //       id: companyIDandName[0],
  //       name: companyIDandName[1],
  //       email: this.editCompanyFormProfile.value.email,
  //       password: this.editCompanyFormProfile.value.password,
  //       coupons: [],
  //     };
  //     this.adminService.updateCompany(company).subscribe(
  //       (response) => (this.serverMessage = response.message),
  //       (error) => (this.serverMessage = error.error.message),
  //       () => {
  //         this.adminService
  //           .getAllCompanies()
  //           .subscribe((response) =>
  //             this.adminService.subjectForGetAllCompanies.next(response.t)
  //           );
  //         setTimeout(() => {
  //           this.serverMessage = null;
  //           this.editCompanyFormProfile.reset();
  //         }, 5000);
  //       }
  //     );
  //   }
  // }
}
