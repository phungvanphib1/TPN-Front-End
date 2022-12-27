import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Category, Images, Product } from './shop';

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
product_detail(id:any): Observable<Product>{
  return this.http.get<Product>(environment.urlAllproduct_detail + '/' + id);
}
image_detail(id:any): Observable<Images[]> {
  return this.http.get<Images[]>(environment.urlAllImage_detail + '/' + id);
}
}
