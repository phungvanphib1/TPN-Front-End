import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Category, Images, Product } from './shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  image_detail(id: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }

  product_list(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlAllProducts);
  }
  tranding_top(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlTrendingPro);
  }
  productnew() {
    return this.http.get<Product[]>(environment.urlproductnew);
  }
  category_list() {
    return this.http.get<Category[]>(environment.urlAllCategories);
  }

product_detail(id:any): Observable<Product>{
  return this.http.get<Product>(environment.urlAllproduct_detail + '/' + id);
}

  addToCart(id: number) {
    return this.http.get(environment.urlAddToCart + id);
  }
  getListOrder(id: any) {
    return this.http.get(environment.urlGetAllCart);
  }
  deleteCart(id: any) {
    return this.http.get(environment.urlDeleteCart + id);
  }
  urlUpdatequantity(id: any, amount: any) {
    return this.http.get(environment.urlUpdatequantity + id + '/' + amount);
  }

  searchProductList(name: string) {
    const response = new Promise(resolve => {
      this.http.get(environment.urlSearch + `product_list/search?
    search=${name}`).subscribe(data => {
        resolve(data)
      }, err => {
        console.log(err);
      });
    });
    return response;
  }
}
