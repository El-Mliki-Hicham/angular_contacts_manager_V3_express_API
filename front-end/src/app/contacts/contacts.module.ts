import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    TableComponent,
    CreateComponent,
    EditComponent,
    ErrorComponent
  ],
  imports: [
    MaterialModule, 
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
