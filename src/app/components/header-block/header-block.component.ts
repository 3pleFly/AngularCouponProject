import { AuthService } from './../../services/auth.service';
import { User } from './../../models/user.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
})
export class HeaderBlockComponent implements OnInit {
  displaySegmentForOther: boolean;
  displaySegmentForMain: boolean;
  signedInUsername: User;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkRouteForMain();
    if (this.authService.isLoggedIn()) {
      this.signedInUsername = this.authService.getTokenSubjectFromStorage();
    }
  }

  checkRouteForMain(): void {
    if (this.router.url === '/main' ) {
      this.displaySegmentForMain = true;
    } else {
      this.displaySegmentForMain = false;
    }
  }

  logout(): void {
    this.router.navigate(['/main']);
    this.authService.logout();
  }
}
