import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TabletestComponent } from './tabletest/tabletest.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TabletestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,FormsModule
  ]
})
export class TestModule { }
