import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shop/components/footer.component';
import { HeaderComponent } from './shop/components/header.component';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    ShopRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
