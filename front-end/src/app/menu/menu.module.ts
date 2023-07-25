import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [
    TableComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
