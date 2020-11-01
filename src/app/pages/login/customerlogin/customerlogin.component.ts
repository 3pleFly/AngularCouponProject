import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss'],
})
export class CustomerloginComponent implements OnInit, OnDestroy {
  loginSubscription: Subscription;

  loginForm = this.formBuilder.group({
    username: [null],
    password: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    if (this.loginSubscription !== undefined) {
      this.loginSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {}

  loginProcess() {
    if (this.loginForm.valid) {
      this.loginSubscription = this.authService
        .login(
          this.loginForm.value.username,
          this.loginForm.value.password,
          this.router.url
        )
        .subscribe((result) => {
          if (result) {
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
        });
    }
  }
}
