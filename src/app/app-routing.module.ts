import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { CustomerloginComponent } from './pages/login/customerlogin/customerlogin.component';
import { CompanyloginComponent } from './pages/login/companylogin/companylogin.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { LoginRedirectorGuard } from './services/login-redirector.guard';
import { AuthGuard } from './services/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginComponent } from './pages/login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRedirectorGuard],
    children: [
      { path: '', redirectTo: 'companylogin', pathMatch: 'full' },
      { path: 'companylogin', component: CompanyloginComponent },
      { path: 'customerlogin', component: CustomerloginComponent },
    ],
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  {
    path: 'company',
    component: CompanyPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customer',
    component: CustomerPageComponent,
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
