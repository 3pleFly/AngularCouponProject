import { Category } from './../../../../../models/category.module';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/models/company.module';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {

  serverMessage: string;
  allCategories: Category[];
  selectedCategory: Category;

  editCategoryFormProfile = this.formBuilder.group({
    category: [null],
    optionCategory: [null],
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

  setCategoryInputDetails(selected: any): void {
    if (selected !== 'Choose Category') {
      this.selectedCategory = this.getSelectedCategory(
        this.editCategoryFormProfile.value.optionCategory
      );
    } else {
      this.selectedCategory = null;
    }
  }

  getSelectedCategory(name: string): Category {
    return this.allCategories.find((category) => category.category === name);
  }

  editCategory(): void {
    if (this.selectedCategory) {
      const category: Category = {
        id: this.selectedCategory.id,
        category: this.editCategoryFormProfile.value.category
      };

      this.adminService.updateCategory(category).subscribe(
        (response) => (this.serverMessage = response.message),
        (error) => (this.serverMessage = error.error.message),
        () => {
          this.adminService.getAllCategories().subscribe((response) => {
            this.adminService.subjectForGetAllCategories.next(response.t);
            this.allCategories = response.t;
          });
          this.editCategoryFormProfile.reset();
          this.selectedCategory = null;
          setTimeout(() => {
            this.serverMessage = null;
          }, 5000);
        }
      );
    }
  }

}
