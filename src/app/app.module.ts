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


@NgModule({
  declarations: [
    AppComponent,
    HeaderAngComponent,
    FooterAngComponent,
    ProductAngComponent,
    ParentComponent,
    ChildComponent
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
