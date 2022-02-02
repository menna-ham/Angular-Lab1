import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAngComponent } from './header-ang/header-ang.component';
import { FooterAngComponent } from './footer-ang/footer-ang.component';
import { ProductAngComponent } from './product-ang/product-ang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAngComponent,
    FooterAngComponent,
    ProductAngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
