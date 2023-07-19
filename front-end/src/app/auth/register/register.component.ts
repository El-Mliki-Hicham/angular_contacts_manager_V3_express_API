import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeError } from 'src/app/errors/code-error';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor(private FormBuilder: FormBuilder,private route:Router,private AuthService : AuthService,private ErrorMessage:CodeError){}
messageError:any;
FormRegister!: FormGroup;
ControlName="ControlName" ;
ControlEmail="ControlEmail" ;
ControlPassword="ControlPassword" ;
ControlUsername="ControlUsername" ;
ControlBirthday="ControlBirthday" ;


ngOnInit(){

  this.FormRegister =this.FormBuilder.group({
    "ControlName": new FormControl('',[
      Validators.required
    ]),
    "ControlUsername": new FormControl('',[
      Validators.required
    ]),
    "ControlBirthday": new FormControl('',[
      Validators.required,
      // validates date format yyyy-mm-dd with regular expression
      Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
    ]),
    "ControlEmail": new FormControl('',[
      Validators.required,Validators.email
    ]),
    "ControlPassword": new FormControl('',[
      Validators.required,Validators.minLength(8)
    ])
})
}

RegisterForm(){
  var user = {
      "fullName":this.FormRegister.get("ControlName")!.value,
      "email":this.FormRegister.get("ControlEmail")!.value,
      "username":this.FormRegister.get("ControlUsername")!.value,
      "password":this.FormRegister.get("ControlPassword")!.value,
      "birthday":this.FormRegister.get("ControlBirthday")!.value,
  }
  this.AuthService.Register(user).subscribe(res=>{
    console.log(res.message);
    console.log(res.results);
    console.log(res.status);
      if(res.status == true){
        this.AuthService.setIsAuthenticated(true)
        console.log(this.AuthService.getIsAuthenticated());

        this.AuthService.setUser(res.results)
        console.log(this.AuthService.getUser())
        this.route.navigate(["/dashboard"])

    }else{
      console.log(res.message)
    }
console.log( this.FormRegister.value);
console.log( this.FormRegister.valid);

},error=>{
  var message =  this.ErrorMessage.message(error.error.code,error.error.key)
this.messageError=message
  console.log(error.error.message)
  console.log(message)
  console.log(error.error)

  console.log(error.error.key)
}
)
}
}
