import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',
    children:[
  {
    path:"",
    component:TableComponent
  },
  {
    path:"create",
    component:CreateComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"**",
    component:ErrorComponent
  }
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
