import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['User', 'Role', 'Email', 'Birthday'];
   ELEMENT_DATA = [
    {

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
