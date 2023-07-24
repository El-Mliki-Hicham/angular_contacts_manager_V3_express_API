import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { AuthService } from 'src/app/services/Auth/auth.service';

import { getAuth, sendPasswordResetEmail } from "firebase/auth"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router,private AuthService: AuthService ,  private FormBuilder:FormBuilder   ){}
  userLoginSucess : boolean
  formLogin!:FormGroup
  controlPassword = "controlPassword"
  controlEmail = "controlEmail"
  messageLogin= false ;
  email: string;
ngOnInit(){
  this.AuthService.setEmailSending(false)
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
  var email =this.formLogin.get("controlEmail")?.value
  email  = email.toLowerCase()
  var user = {
    email:email,
    password:this.formLogin.get("controlPassword")?.value
  }
  console.log(user)
  this.AuthService.Login(user).subscribe(user=>{

    console.log(user.results)
    if(user.status == true){
        this.AuthService.setIsAuthenticated(true)
        console.log(this.AuthService.getIsAuthenticated());

        this.AuthService.setUser(user.results)
        var role =this.AuthService.getUser().role
        this.AuthService.setRole(role)
        console.log(this.AuthService.getUser())
        this.route.navigate(["/dashboard"])

    }else{
      this.messageLogin = true
    }
  },error=>{
    console.error(error)
  }

  )


}
loginGmail(): void {


}

logout(): void {

}

resetPassword(){
    this.route.navigate(['resetPassword'])
}

}
