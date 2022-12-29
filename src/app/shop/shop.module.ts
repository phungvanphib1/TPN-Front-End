import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './components/home.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './components/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListorderComponent } from './components/listorder.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Product_detailComponent } from './components/product_detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { CheckoutComponent } from './components/checkout.component';



@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    Product_detailComponent,
    ListorderComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatInputModule

  ],
})
export class ShopModule { }
