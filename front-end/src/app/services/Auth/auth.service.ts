import { T } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  data = <User>[]
  userLogged = {}



  constructor(private httpClient: HttpClient) {
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    if (storedIsAuthenticated) {
      this.isAuthenticated = JSON.parse(storedIsAuthenticated);
    }
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
  setUser(user:User){
    this.userLogged = user
  }
  getUserData() {
    return this.data;
  }
  getAllUsers(): Observable<User> {
    var data = this.httpClient.get<User>('mongodb://localhost:27017')
    return data
  }



}
