import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from "./notes/NotesComponent";
import { PostsComponent } from './posts/posts.component';
import { ProductAngComponent } from './product-ang/product-ang.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'posts', component : PostsComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductAngComponent ,
children:[
  { path :'discount',component:DiscountComponent},
  { path :'without-discount' , component :WithoutDiscountComponent}
]
},
  {path:'register',component:ReactiveRegisterComponent},
  {path:'login', component:ReactiveLoginComponent},
  {path:'notes' , component:NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
