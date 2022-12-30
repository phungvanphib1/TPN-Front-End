import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductListComponent } from './components/product-list.component';
import { Product_detailComponent } from './components/product_detail.component';
import { ListorderComponent } from './components/listorder.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { CheckoutComponent } from './components/checkout.component';
import { OrderDetailComponent } from './components/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product-detail/:id', component: Product_detailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'listorder', component: ListorderComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'order-detail', component: OrderDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class ShopRoutingModule { }
