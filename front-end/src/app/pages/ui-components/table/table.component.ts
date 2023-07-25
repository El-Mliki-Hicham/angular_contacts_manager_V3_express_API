import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
   ELEMENT_DATA = [
    {
      id: 1,
      imagePath: 'assets/images/profile/user-1.jpg',
      uname: 'sss',
      position: 'Web Designer',
      productName: 'Elite Admin',
      budget: 3.9,
      priority: 'low',
    }
  ]
message: any;

}
