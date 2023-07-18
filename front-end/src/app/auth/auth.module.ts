import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import {OAuthModule } from 'angular-oauth2-oidc'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,FormsModule,
    MaterialModule,
    CommonModule,
    AuthRoutingModule,HttpClientModule,
    OAuthModule.forRoot()

  ]
})
export class AuthModule { }
