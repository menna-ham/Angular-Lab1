import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  constructor( private http :HttpClient) { }
  usersUrl='https://jsonplaceholder.typicode.com/users';
   
  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>( this.usersUrl).pipe(
      catchError((err)=>{
        return throwError(()=>err.message || 'Error From Users Services')
      })
    )
  }
}
