import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { MenuService } from 'src/app/services/Menu/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems:any;

  constructor(public navService: NavService,private MenuService:MenuService) {}

  ngOnInit(): void {
     this.MenuService.getAllMenu().subscribe(data=>{
        this.navItems=data
    })
  }
}
