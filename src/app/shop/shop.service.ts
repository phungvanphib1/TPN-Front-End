import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Category, Product } from './shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

constructor(private http: HttpClient) {}

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
searchProductList(name:string){
  const response = new Promise(resolve => {
    this.http.get(environment.urlSearch+`product_list/search?
    search=${name}`).subscribe(data => {
      resolve(data)
    }, err => {
      console.log(err);
    });
  });
  return response;
}
}
