import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private shopService: ShopService) { }
  url: string = environment.url;
  trending_top: any[] = [];
  product_New: any[] = []
  ngOnInit() {
    this.trending();
    this.productNew();
  }
  trending() {
    this.shopService.tranding_top().subscribe(res => {
      this.trending_top = res;
    })
  }

  productNew() {
    this.shopService.productnew().subscribe(res => {
      this.product_New = res;
    })
  }
  addToCart(id: number) {
    this.shopService.addToCart(id).subscribe(res => {
      alert('Thêm vào giỏ hàng thành công!');
    })
  }


}

