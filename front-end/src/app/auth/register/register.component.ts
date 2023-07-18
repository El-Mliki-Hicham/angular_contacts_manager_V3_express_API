import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor(private FormBuilder: FormBuilder){}

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
console.log( this.FormRegister.value);
console.log( this.FormRegister.valid);

}
}
