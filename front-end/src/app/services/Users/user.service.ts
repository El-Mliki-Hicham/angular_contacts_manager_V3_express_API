import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from 'src/app/models/results';
import { User, UserResults } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getAllUsers(): Observable<Results> {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
    })
    var data = this.httpClient.get<Results>('http://localhost:3000/users/get-users', { headers: header })
    return data
  }
}
