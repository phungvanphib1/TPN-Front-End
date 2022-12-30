import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './../templates/order-detail.component.html',
})
export class OrderDetailComponent implements OnInit {

  orderId: any;
  order: any;
  totalPrice: number = 0;
  url: string = environment.url;
  constructor(
    private ShopService: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params['id'];
    this.ShopService.showOrder(this.orderId).subscribe(res => {
      this.order = res;
      for(let orderDetail of this.order.order_details){
        this.totalPrice += parseInt(orderDetail.price_at_time) * parseInt(orderDetail.quantity);
      }
    })
  }
}
