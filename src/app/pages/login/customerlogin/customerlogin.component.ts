import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.scss']
})
export class CustomerloginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: [null],
    password: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginProcess() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((result) => {
        if (result) {
          switch (this.authService.getCurrentScope()) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'company':
              this.router.navigate(['/company']);
              break;
            case 'custoemr':
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
