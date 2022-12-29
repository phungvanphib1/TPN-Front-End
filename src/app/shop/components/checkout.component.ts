import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-checkout',
  templateUrl: '../templates/checkout.component.html',
})
export class CheckoutComponent implements OnInit {

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

  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['id'];
    this.ShopService.getListOrder(this.customer_id).subscribe(res => {
      this.orders = res;
      console.log(res);
      for (let orderDetail of this.orders) {
        this.totalPrice += (parseInt(orderDetail.price) * parseInt(orderDetail.quantity));
      }
    })
  }

}
