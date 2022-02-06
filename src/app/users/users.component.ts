import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;
  msg:any;

  constructor( private UsersService:UsersService) { 
    this.users;
  }

  ngOnInit(): void {
    this.UsersService.getUsers().subscribe(
      data=>{
        this.users=data
      },
      myErr=>{
        this.msg=myErr;
      }
    ) 
  }

}
