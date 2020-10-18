import { ResponseDto } from './../models/responseDto.module ';
import { baseUrl } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authorization = 'Authorization';
  private loggedUser: string;

  constructor(private http: HttpClient) {}
  login(
    user: { username: string; password: string },
    route: string
  ): Observable<any> {
    if (user.username === 'admin' && user.password === 'admin') {
      return this.http.post(`${baseUrl}/public/admin`, user).pipe(
        tap((response: ResponseDto<string>) =>
          this.doLoginUser(user.username, response)
        ),
        mapTo(true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
    }

    if (route === '/login/companylogin') {
      return this.http.post(`${baseUrl}/public/company`, user).pipe(
        tap((response: ResponseDto<string>) =>
          this.doLoginUser(user.username, response)
        ),
        mapTo(true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
    }

    if (route === '/login/customerlogin') {
      return this.http.post(`${baseUrl}/public/customer`, user).pipe(
        tap((response: ResponseDto<string>) =>
          this.doLoginUser(user.username, response)
        ),
        mapTo(true),
        catchError((error) => {
          alert(error.error);
          return of(false);
        })
      );
    }
  }

  logout() {
    this.loggedUser = null;
    localStorage.removeItem(this.authorization);
  }

  decodeJwt(token: string): string {
    let decodedToken = jwt_decode(token);
    return decodedToken.scope;
  }

  getCurrentScope(): string {
    let token = localStorage.getItem(this.authorization);
    return this.decodeJwt(token);
  }

  getJwtToken() {
    return localStorage.getItem(this.authorization);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  private doLoginUser(username: string, response: ResponseDto<string>) {
    this.loggedUser = username;
    this.storeTokens(response.t);
  }

  private storeTokens(responseToken: string) {
    localStorage.setItem(this.authorization, responseToken);
  }
}
