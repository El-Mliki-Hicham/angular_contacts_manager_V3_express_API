import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';


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
  var user = {
    email:this.formLogin.get("controlEmail")?.value,
    password:this.formLogin.get("controlPassword")?.value
  }
  console.log(user)
  this.AuthService.Login(user).subscribe(user=>{
    console.log(user)
    if(user){
        this.AuthService.setIsAuthenticated(true)
        console.log(this.AuthService.getIsAuthenticated());
        this.route.navigate(["/dashboard"])

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


}
