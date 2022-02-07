import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAngComponent } from './header-ang/header-ang.component';
import { FooterAngComponent } from './footer-ang/footer-ang.component';
import { ProductAngComponent } from './product-ang/product-ang.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './component interaction/parent/parent.component';
import { ChildComponent } from './component interaction/child/child.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DiscountComponent } from './discount/discount.component';
import { WithoutDiscountComponent } from './without-discount/without-discount.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderAngComponent,
    FooterAngComponent,
    ProductAngComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    DiscountComponent,
    WithoutDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
