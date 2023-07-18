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
ControlName:"ControlName" ;
ControlEmail:"ControlEmail" ;
ControlPassword:"ControlPassword" ;


ngOnInit(){

  this.FormRegister =this.FormBuilder.group({
    "ControlName": new FormControl('',[
      Validators.required
    ]),
    "ControlEmail": new FormControl('',[
      Validators.required,Validators.email
    ]),
    "ControlPassword": new FormControl('',[
      Validators.required,Validators.minLength(8)
    ])
})
}

Register(){
console.log(  this.FormRegister.value());

}
}
