import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountComponent } from './discount/discount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { ProductAngComponent } from './product-ang/product-ang.component';
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
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
