import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './components/home.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './components/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Product_detailComponent } from './components/product_detail.component';


@NgModule({
  declarations: [
    ShopComponent,
    HomeComponent,
    ProductListComponent,
    Product_detailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShopRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class ShopModule { }
