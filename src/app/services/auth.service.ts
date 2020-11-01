import { ResponseDto } from '../models/responseDto.module';
import { baseUrl } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authorization = 'Authorization';

  constructor(private http: HttpClient) {}

  login(username: string, password: string, route: string): Observable<any> {
    if (username === 'admin' && password === 'admin') {
      return this.http
        .post(`${baseUrl}/public/admin`, { username, password })
        .pipe(
          tap((response: ResponseDto<string>) => this.storeTokens(response.t)),
          mapTo(true),
          catchError((error) => {
            alert(error.error);
            return of(false);
          })
        );
    }

    if (route === '/login/companylogin') {
      return this.http
        .post(`${baseUrl}/public/company`, { username, password })
        .pipe(
          tap((response: ResponseDto<string>) => this.storeTokens(response.t)),
          mapTo(true),
          catchError((error) => {
            alert(error.error);
            return of(false);
          })
        );
    }

    if (route === '/login/customerlogin') {
      return this.http
        .post(`${baseUrl}/public/customer`, { username, password })
        .pipe(
          tap((response: ResponseDto<string>) => this.storeTokens(response.t)),
          mapTo(true),
          catchError((error) => {
            alert(error.error);
            return of(false);
          })
        );
    }
  }

  logout() {
    localStorage.removeItem(this.authorization);
  }

  decodeJwt(token: string) {
    return jwt_decode(token);
  }

  getTokenScopeFromStorage(): string {
    const token = localStorage.getItem(this.authorization);
    if (token != null) {
      return this.decodeJwt(token).scope;
    }
  }

  getTokenSubjectFromStorage(): string {
    const token = localStorage.getItem(this.authorization);
    if (token != null) {
      return this.decodeJwt(token).sub;
    }
  }

  getJwtToken() {
    return localStorage.getItem(this.authorization);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  // private doLoginUser(response: ResponseDto<string>) {
  //   this.storeTokens(response.t);
  // }

  private storeTokens(responseToken: string) {
    localStorage.setItem(this.authorization, responseToken);
  }
}
