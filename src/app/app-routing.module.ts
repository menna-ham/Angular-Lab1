import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProductAngComponent } from './product-ang/product-ang.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'posts', component : PostsComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductAngComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
