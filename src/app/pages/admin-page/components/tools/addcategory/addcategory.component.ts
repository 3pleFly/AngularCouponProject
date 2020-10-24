import { Category } from './../../../../../models/category.module';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  serverMessage: string;

  addCategoryFormProfile = this.formBuilder.group({
    category: [null, Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {}

  addCategory(): void {
    if (this.addCategoryFormProfile.valid) {
      const category: Category = {
        id: 0,
        category: this.addCategoryFormProfile.value.category,
      };
      this.adminService.addCategory(category).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService
            .getAllCategories()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCategories.next(response.t)
            );
          setTimeout(() => {
            this.addCategoryFormProfile.reset();
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
