import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBlockComponent } from './components/header-block/header-block.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselMainComponent } from './components/carousel-main/carousel-main.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { HttpClientModule } from '@angular/common/http';
import { DualSigninComponent } from './components/dual-signin/dual-signin.component';
import { DisplayCouponsComponent } from './components/display-coupons/display-coupons.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login/login.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
