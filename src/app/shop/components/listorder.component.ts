import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-listorder',
  templateUrl: '../templates/listorder.component.html',
})
export class ListorderComponent implements OnInit {

  customer_id: any;
  orders: any;
  totalPrice: number = 0;
  url: string = environment.url;
  message: {} = {};
  constructor(
    private ShopService: ShopService,
    private route: ActivatedRoute,
    // private _ShopService: ShopService,
    private router: Router
  ) { }

  deleteCart(id: number) {
    this.ShopService.deleteCart(id).subscribe(res => {
      this.message = res;
      window.location.reload();
    })
  }
  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['id'];
    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.orders = res;
      console.log(res);
      // for(let orderDetail of this.orders.orders.order_details) {
      //   this.totalPrice += parseInt(orderDetail.price_at_time) * parseInt(orderDetail.quantity);
      // }
    })
  }
  urlUpdatequantity(id: any, amount: any) {
    this.ShopService.urlUpdatequantity(id, amount).subscribe((res) => {
      this.ShopService.getListOrder(this.customer_id);
    });
  }


}
