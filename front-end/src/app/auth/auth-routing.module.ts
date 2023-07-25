import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyLoggedGuard } from '../middleware/already-logged.guard';
import { EmailSendedGuard } from '../middleware/email-sended.guard';
import { EmailSendComponent } from './email-send/email-send.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
        },
        {
          path:"resetPassword",
          component:ResetPasswordComponent
        },
        {
          canActivate:[EmailSendedGuard],
          path:"resetPassword/emailSend",
          component:EmailSendComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
