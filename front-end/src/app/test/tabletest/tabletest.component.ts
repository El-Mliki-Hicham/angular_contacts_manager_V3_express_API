import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-tabletest',
  templateUrl: './tabletest.component.html',
  styleUrls: ['./tabletest.component.scss']
})

export class TabletestComponent {
  constructor(private http: HttpClient) {}
input="NgModel"

  createComponent(value:any) {
    const componentName = this.input;
    const templateUrl = 'generator/crud/table.html';
    const command = `ng g component testing/${componentName} --skip-import --template-url=${templateUrl}`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(
      'http://localhost:3001/api/generate-component',
      { command },
      { headers }
    ).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
}
