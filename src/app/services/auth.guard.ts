import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isLoggedIn()) {
      alert('Please login first');
      this.router.navigate(['/login']);
    }
    if (state.url !== '/' + this.authService.getTokenScopeFromStorage()) {
      this.router.navigate([`/${this.authService.getTokenScopeFromStorage()}`]);
    }

    return this.authService.isLoggedIn();
  }
}
