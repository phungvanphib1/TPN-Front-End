import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
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
      this.ShopService.getListOrder(this.customer_id).subscribe(res => {
        this.orders = res;
        // thông báo
        const Toast = Swal.mixin({
          toast: true,
          width: 400,
          position: 'top-end',
          color: 'rgb(255, 255, 255)',
          padding: '2em',
          showConfirmButton: false,
          background: 'rgb(108, 108, 108)',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Sản phẩm đã xóa!'
        })
        // kết thúc thông báo
      })
    })
  }
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
  urlUpdatequantity(id: any, amount: any) {
    this.ShopService.urlUpdatequantity(id, amount).subscribe((res) => {
      this.ngOnInit();
    });
  }
  }



