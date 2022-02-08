import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { RegisterForm } from '../shared-class&types/RegisterForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  social:string[] =['Facebook','Twitter','Google'];
  register:RegisterForm = new RegisterForm('','','','','Facebook')

  constructor( private registerSer:LoginRegisterService) { }

  ngOnInit(): void {
  }

  SubmitBtn()
  {
    console.log(this.register)
    this.registerSer.RegisterSer(this.register).subscribe(res=>{
      console.log('Successful login' , res)
    },
    error=>{
      console.log('Error in Registering',error)
    }
    )
  }

}
