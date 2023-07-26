import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '../contacts/error/error.component';
import { TabletestComponent } from './tabletest/tabletest.component';

const routes: Routes = [
  {
    path:'',
    children:[
  {
    path:"",
    component:TabletestComponent
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
export class TestRoutingModule { }
