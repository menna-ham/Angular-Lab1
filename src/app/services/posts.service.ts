import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IPosts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http:HttpClient) { }
  _postUrl='https://jsonplaceholder.typicode.com/posts';
  err:any;

  // (catchError((err)=>
  //   {
  //     return throwError(()=>err.message||"Server error")
  //   }))

  getPosts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this._postUrl).pipe(
      catchError((err)=>{
        return throwError(()=>err.message || 'Error From Posts Services')
      })
    )
  }
}


