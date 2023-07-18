import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthService as AuthServiceGmail  } from '@auth0/auth0-angular';
import { OAuthService } from 'src/app/services/o-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router,private AuthService: AuthService ,  private FormBuilder:FormBuilder  ,private GoogleService:OAuthService ){}
  userLoginSucess : boolean
  formLogin!:FormGroup
  controlPassword = "controlPassword"
  controlEmail = "controlEmail"

ngOnInit(){

  this.formLogin =this.FormBuilder.group({
    "controlEmail": new FormControl('',[
      Validators.required,Validators.email
    ]),
    "controlPassword": new FormControl('',[
      Validators.required,Validators.minLength(8)
    ])
})
}

login(){
  console.log(this.formLogin.value)
    var user = {
    'email':"hicham@gmail.com",
    "password":"12345678"
    }
    if(this.formLogin.get("controlEmail")?.value == user.email && this.formLogin.get("controlPassword")?.value == user.password ){
        this.AuthService.setIsAuthenticated(true)
        console.log(this.AuthService.getIsAuthenticated());
        this.route.navigate(["/dashboard"])

    }

}
loginGmail(): void {


}

logout(): void {

}


}
