import { Category } from './../../../../../models/category.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.scss']
})
export class DeletecategoryComponent implements OnInit {

  selectedCategory: Category;
  serverMessage: string;
  allCategories: Category[];

  deleteCategoryFormProfile = this.formBuilder.group({
    category: [null],
  });
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.adminService
      .getAllCategories()
      .subscribe((response) => (this.allCategories = response.t));
  }

  getSelectedCategory(name: string): Category {
    return this.allCategories.find((category) => category.category === name);
  }

  setSelectCategory(selected: any): void {
    if (selected !== 'Choose Category') {
      this.selectedCategory = this.getSelectedCategory(
        this.deleteCategoryFormProfile.value.category
      );
    } else {
      this.selectedCategory = null;
    }
  }

  deleteCategory(): void {
    if (this.selectedCategory) {
      this.adminService.deleteCategory(this.selectedCategory.id).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService
            .getAllCategories()
            .subscribe((response) =>
              this.adminService.subjectForGetAllCategories.next(response.t)
            );
          this.selectedCategory = null;
          this.deleteCategoryFormProfile.reset();
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }
}
