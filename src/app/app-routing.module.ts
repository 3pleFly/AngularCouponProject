import { DeletecategoryComponent } from './components/special-components/admin/admin-categories-tools/deletecategory/deletecategory.component';
import { AdminCategoriesToolsComponent } from './components/special-components/admin/admin-categories-tools/admin-categories-tools.component';
import { AdminCategoriesUiComponent } from './components/special-components/admin/admin-categories-ui/admin-categories-ui.component';
import { AdminCustomersToolsComponent } from './components/special-components/admin/admin-customers-tools/admin-customers-tools.component';
import { AdminCustomersUiComponent } from './components/special-components/admin/admin-customers-ui/admin-customers-ui.component';
import { DeletecustomerComponent } from './components/special-components/admin/admin-customers-tools/deletecustomer/deletecustomer.component';
import { EditcustomerComponent } from './components/special-components/admin/admin-customers-tools/editcustomer/editcustomer.component';
import { AddcustomerComponent } from './components/special-components/admin/admin-customers-tools/addcustomer/addcustomer.component';
import { DeletecompanyComponent } from './components/special-components/admin/admin-companies-tools/deletecompany/deletecompany.component';
import { EditcompanyComponent } from './components/special-components/admin/admin-companies-tools/editcompany/editcompany.component';
import { AddcompanyComponent } from './components/special-components/admin/admin-companies-tools/addcompany/addcompany.component';
import { AdminCompaniesToolsComponent } from './components/special-components/admin/admin-companies-tools/admin-companies-tools.component';
import { CustomerUiComponent } from './components/special-components/customer/customer-ui/customer-ui.component';
import { AdminCompaniesUiComponent } from './components/special-components/admin/admin-companies-ui/admin-companies-ui.component';
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
import { AddcategoryComponent } from './components/special-components/admin/admin-categories-tools/addcategory/addcategory.component';
import { EditcategoryComponent } from './components/special-components/admin/admin-categories-tools/editcategory/editcategory.component';

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
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'companiesui',
        component: AdminCompaniesUiComponent,
        children: [
          {
            path: '',
            component: AdminCompaniesToolsComponent,
            children: [
              { path: 'addcompany', component: AddcompanyComponent },
              { path: 'editcompany', component: EditcompanyComponent },
              { path: 'deletecompany', component: DeletecompanyComponent },
            ],
          },
        ],
      },
      {
        path: 'customersui',
        component: AdminCustomersUiComponent,
        children: [
          {
            path: '',
            component: AdminCustomersToolsComponent,
            children: [
              { path: 'addcustomer', component: AddcustomerComponent },
              { path: 'editcustomer', component: EditcustomerComponent },
              { path: 'deletecustomer', component: DeletecustomerComponent },
            ],
          },
        ],
      },
      {
        path: 'categoriesui',
        component: AdminCategoriesUiComponent,
        children: [
          {
            path: '',
            component: AdminCategoriesToolsComponent,
            children: [
              { path: 'addcategory', component: AddcategoryComponent },
              { path: 'editcategory', component: EditcategoryComponent },
              { path: 'deletecategory', component: DeletecategoryComponent },
            ],
          },
        ],
      },
    ],
  },

  {
    path: 'company',
    component: CompanyPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customer',
    component: CustomerPageComponent,
    canActivate: [AuthGuard],
    children: [{ path: 'customerui', component: CustomerUiComponent }],
  },

  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
