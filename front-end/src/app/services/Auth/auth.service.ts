import { T } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from 'src/app/models/results';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  private isAuthenticated = false;
  private userLogged: any;
  private emailSending = false;
  private role: string;


  constructor(private httpClient: HttpClient) {
    const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated) {
      this.isAuthenticated = JSON.parse(storedIsAuthenticated);
    }
    const user = sessionStorage.getItem('user');
    if (user) {
      this.userLogged = JSON.parse(user);
    }
    const role = sessionStorage.getItem('role');
    if (role) {
      this.role = JSON.parse(role);
    }
  }

  setEmailSending(value: boolean) {
    this.emailSending = value;
    sessionStorage.setItem('emailSending', JSON.stringify(value));
  }

  getEmailSending() {
    return this.emailSending;
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
    sessionStorage.setItem('isAuthenticated', JSON.stringify(value));
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  checkIsAuthenticated() {
    return this.isAuthenticated;
  }

  setUser(user: any) {
    this.userLogged = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.userLogged;
  }

  setRole(role: string) {
    this.role = role;
    sessionStorage.setItem('role', JSON.stringify(role));
  }

  getRole() {
    return this.role;
  }

  Login(value: any): Observable<Results> {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
    })
    var data = this.httpClient.post<Results>('http://localhost:3000/users/login-user', value, { headers: header })
    return data
  }
  //forgotPassword
  resetPassword(value: any): Observable<Results> {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
    })
    var data = this.httpClient.post<Results>('http://localhost:3000/users/reset-password', value, { headers: header })
    return data
  }
  //register
  Register(value: any): Observable<Results> {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
    })
    var data = this.httpClient.post<Results>('http://localhost:3000/users/add-user', value, { headers: header })
    return data
  }



}

