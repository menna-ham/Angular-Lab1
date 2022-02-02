import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAngComponent } from './header-ang/header-ang.component';
import { FooterAngComponent } from './footer-ang/footer-ang.component';
import { ProductAngComponent } from './product-ang/product-ang.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAngComponent,
    FooterAngComponent,
    ProductAngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
