import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { CodeError } from '../errors/code-error';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailSendComponent } from './email-send/email-send.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    EmailSendComponent
  ],
  imports: [
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    CommonModule,
    AuthRoutingModule,HttpClientModule,


  ],providers:[
    CodeError
  ]
})
export class AuthModule { }
