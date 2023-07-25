import { Component } from '@angular/core';
import { UserService } from 'src/app/services/Users/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private userService:UserService){}
  Users:any
  ELEMENT_DATA:any
  ngOnInit(){
    this.userService.getAllUsers().subscribe(data=>{
    this.Users = data.results
    this.ELEMENT_DATA =this.Users
    console.log(data.results)
    })
    console.log()
  }
  displayedColumns: string[] = ['User', 'Role', 'Email', 'Birthday'];

message: any;

}
