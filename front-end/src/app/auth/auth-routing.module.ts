import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyLoggedGuard } from '../middleware/already-logged.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    canActivate:[AlreadyLoggedGuard],
    children:[
        {
          path:"",
          component:LoginComponent
        },
        {
          path:"register",
          component:RegisterComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
