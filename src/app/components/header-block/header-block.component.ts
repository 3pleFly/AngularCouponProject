import { DataService } from 'src/app/services/data.service';
import { Category } from './../../models/category.module';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
})
export class HeaderBlockComponent implements OnInit {
  allCategories: Category[];
  displaySegmentForOther: boolean;
  displaySegmentForMain: boolean;
  signedInUsername: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.checkRouteForMain();
    if (this.authService.isLoggedIn()) {
      this.signedInUsername = this.authService.getTokenSubjectFromStorage();
    }
    this.dataService
      .getAllCategories()
      .subscribe((response) => (this.allCategories = response.t));
  }

  checkRouteForMain(): void {
    if (this.router.url === '/main') {
      this.displaySegmentForMain = true;
    } else {
      this.displaySegmentForMain = false;
    }
  }

  logout(): void {
    this.signedInUsername = null;
    this.authService.logout();
    this.router.navigate(['/main']);

  }

  showAllDisplay(): void {
    const category: Category = {
      id: 0,
      category: 'showAll',
    };
    this.dataService.subjectForCategoryDisplay.next(category);
  }

  switchDisplay(category: Category): void {
    this.dataService.subjectForCategoryDisplay.next(category);
  }
}
