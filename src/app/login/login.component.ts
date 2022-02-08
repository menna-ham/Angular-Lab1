import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { LoginForm } from '../shared-class&types/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:LoginForm= new LoginForm('','')

  constructor( private loginser:LoginRegisterService) { }

  ngOnInit(): void {
  }


  SubmitBtn(){
    console.log(this.login)
    this.loginser.loginSer(this.login).subscribe(res=>{
      console.log('Successful login' , res)
    },
    error=>{
      console.log('Error in Loginig in ',error)
    }
    )
  }


}
