import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
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
        title: 'Sản Phẩm Đã được thêm vào giỏ hàng!'
      })
      // kết thúc thông báo
    })
  }


}

