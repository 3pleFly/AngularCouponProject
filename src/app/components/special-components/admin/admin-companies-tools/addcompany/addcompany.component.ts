import { Company } from './../../../../../models/company.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss'],
})
export class AddcompanyComponent implements OnInit {
  serverMessage: string;

  addCompanyFormProfile = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  addCompany(): void {
    if (this.addCompanyFormProfile.valid) {
      const company: Company = {
        id: 0,
        name: this.addCompanyFormProfile.value.name,
        email: this.addCompanyFormProfile.value.email,
        password: this.addCompanyFormProfile.value.password,
        coupons: [],
      };
      this.adminService.addCompany(company).subscribe(
        (response) => (this.serverMessage = response.message),
        () => this,
        () => {
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
