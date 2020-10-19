import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginRedirectorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      switch (this.authService.getTokenScopeFromStorage()) {
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        case 'company':
          this.router.navigate(['/company']);
          break;
        case 'customer':
          this.router.navigate(['/customer']);
          break;

        default:
          return throwError('Unknown scope');
      }
    }
    return !this.authService.isLoggedIn();
  }
}
