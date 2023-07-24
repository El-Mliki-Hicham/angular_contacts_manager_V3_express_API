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
  private userLogged: User
  private emailSending = false
  private role :String



  constructor(private httpClient: HttpClient) {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated) {
      this.isAuthenticated = JSON.parse(storedIsAuthenticated);
    }
    const User = localStorage.getItem('user');
    if (User) {
      this.userLogged = JSON.parse(User);
    }
  }

  setEmailSending(value:boolean){
    this.emailSending = value
    localStorage.setItem('emailSending', JSON.stringify(value));
  }
  getEmailSending() {
    return this.emailSending;
  }

  setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
    localStorage.setItem('isAuthenticated', JSON.stringify(value));
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  checkIsAuthenticated() {
    return this.isAuthenticated;
  }
  setUser(user: any) {
    this.userLogged = user
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() {
    return this.userLogged
  }
  setRole(){
     this.role=  this.userLogged.role
  }
  getRole(){
    return this.role
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

