import { AdminCustomersToolsComponent } from './components/special-components/admin/admin-customers-tools/admin-customers-tools.component';
import { DeletecustomerComponent } from './components/special-components/admin/admin-customers-tools/deletecustomer/deletecustomer.component';
import { EditcustomerComponent } from './components/special-components/admin/admin-customers-tools/editcustomer/editcustomer.component';
import { AddcustomerComponent } from './components/special-components/admin/admin-customers-tools/addcustomer/addcustomer.component';
import { DeletecompanyComponent } from './components/special-components/admin/admin-companies-tools/deletecompany/deletecompany.component';
import { EditcompanyComponent } from './components/special-components/admin/admin-companies-tools/editcompany/editcompany.component';
import { AddcompanyComponent } from './components/special-components/admin/admin-companies-tools/addcompany/addcompany.component';
import { AdminCompaniesToolsComponent } from './components/special-components/admin/admin-companies-tools/admin-companies-tools.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBlockComponent } from './components/header-block/header-block.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DualSigninComponent } from './components/dual-signin/dual-signin.component';
import { DisplayCouponsComponent } from './components/display-coupons/display-coupons.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CompanyloginComponent } from './pages/login/companylogin/companylogin.component';
import { CustomerloginComponent } from './pages/login/customerlogin/customerlogin.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { AdminSidebarComponent } from './components/special-components/admin/admin-sidebar/admin-sidebar.component';
import { AdminCompaniesUiComponent } from './components/special-components/admin/admin-companies-ui/admin-companies-ui.component';
import { CustomerSidebarComponent } from './components/special-components/customer/customer-sidebar/customer-sidebar.component';
import { CustomerUiComponent } from './components/special-components/customer/customer-ui/customer-ui.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminCustomersUiComponent } from './components/special-components/admin/admin-customers-ui/admin-customers-ui.component';
import { AdminCategoriesUiComponent } from './components/special-components/admin/admin-categories-ui/admin-categories-ui.component';
import { AdminMainUiComponent } from './pages/admin-page/components/admin-main-ui/admin-main-ui.component';
import { AdminCategoriesToolsComponent } from './pages/admin-page/components/tools/admin-categories-tools/admin-categories-tools.component';
import { AddcategoryComponent } from './pages/admin-page/components/tools/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/admin-page/components/tools/editcategory/editcategory.component';
import { DeletecategoryComponent } from './pages/admin-page/components/tools/deletecategory/deletecategory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBlockComponent,
    CarouselMainComponent,
    ShowcaseComponent,
    DualSigninComponent,
    DisplayCouponsComponent,
    FooterComponent,
    MainPageComponent,
    LoginComponent,
    CompanyPageComponent,
    AdminPageComponent,
    CompanyloginComponent,
    CustomerloginComponent,
    CustomerPageComponent,
    AdminSidebarComponent,
    AdminCompaniesUiComponent,
    CustomerSidebarComponent,
    AdminCompaniesToolsComponent,
    AddcompanyComponent,
    EditcompanyComponent,
    DeletecompanyComponent,
    AddcustomerComponent,
    EditcustomerComponent,
    DeletecustomerComponent,
    AdminCustomersToolsComponent,
    CustomerUiComponent,
    AdminCompaniesToolsComponent,
    AdminCustomersUiComponent,
    AdminCategoriesUiComponent,
    AdminMainUiComponent,
    AdminCategoriesToolsComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    DeletecategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
