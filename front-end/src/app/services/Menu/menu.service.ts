import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavItem } from 'src/app/models/nav-item';
import { Results } from 'src/app/models/results';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient : HttpClient) { }

  getAllMenu(): Observable<NavItem> {

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
    })
    var data = this.httpClient.get<NavItem>('http://localhost:3000/menu/get-menu', { headers: header })
    return data
  }
}
