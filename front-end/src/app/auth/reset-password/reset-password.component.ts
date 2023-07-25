import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CodeError } from 'src/app/errors/code-error';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(private router:Router, private FormBuilder:FormBuilder,private service:AuthService,private MessageError:CodeError){}
  message:any
  formReset: FormGroup
  controlEmail = "controlEmail"


  ngOnInit() {
    this.formReset = this.FormBuilder.group({
      "controlEmail": new FormControl('', [
        Validators.required, Validators.email
      ]),
    })
  }


  forgotPassword(){
    var email = this.formReset.get("controlEmail")?.value
    email  = email.toLowerCase()
    this.service.resetPassword({"email":email}).subscribe(user=>{
      if(user.status== false){
      var message= this.MessageError.message(user.code,user.key)
      this.message = message
    }
    else{
      console.log(user.results.fullName)
    }
    emailjs.init('VqBxh-ze6PTdjNscv')
    emailjs.send("service_73a4rcj","template_kfe8nhn",{
      to_email:email,
      from_email : 'mlikiA26@gmail.com',
      to_name: user.results.fullName,
      message: user.new_password,
    }).then(res=>{
      console.log(res)
      this.service.setEmailSending(true)
      this.router.navigate(["/auth/resetPassword/emailSend"])
    })
  })
  }
}
