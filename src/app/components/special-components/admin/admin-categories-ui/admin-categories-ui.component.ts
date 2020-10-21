import { Category } from './../../../../models/category.module';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.module';
import { AdminService } from 'src/app/services/method/admin.service';

@Component({
  selector: 'app-admin-categories-ui',
  templateUrl: './admin-categories-ui.component.html',
  styleUrls: ['./admin-categories-ui.component.scss']
})
export class AdminCategoriesUiComponent implements OnInit {
  allCategories: Category[];
  filterTerm;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllCategories().subscribe((response) => {
      this.allCategories = response.t;
    });
    this.adminService.subjectForGetAllCategories.subscribe((categories) => {
      this.allCategories = categories;
    });
  }
}
