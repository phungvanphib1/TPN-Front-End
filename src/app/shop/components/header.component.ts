import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent implements OnInit {
  products: any;
  url: string = environment.url;
  customer_id: any;
  orders: any;
  totalPrice: number = 0;
  constructor(private shopService: ShopService,
    private _Router: Router,
    private ShopService: ShopService,
    private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['id'];
    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.orders = res;
      console.log(res);
      // for(let orderDetail of this.orders) {
      //   this.totalPrice += (parseInt(orderDetail.price) * parseInt(orderDetail.quantity));
      // }
    })
  }
  handdleSearch(name: any) {
    const keywork = name.target.value;
    const search = this.shopService.searchProductList(keywork).then(res => {
      this.products = res;
      console.log(res);

    })
  }
  reloadCurrentPage(id: any) {
    this._Router.navigate(['/product-detail/' + id]);
  }
  deleteCart(id: number) {
    this.ShopService.deleteCart(id).subscribe(res => {
      this.ShopService.getListOrder(this.customer_id).subscribe(res => {
        this.orders = res;
      })
    })
  }


}
