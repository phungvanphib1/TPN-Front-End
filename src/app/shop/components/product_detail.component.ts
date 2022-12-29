import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product_detail',
  templateUrl: '../templates/product_detail.component.html',
})
export class Product_detailComponent implements OnInit {

  constructor(
    private shopService: ShopService,
    private _route: ActivatedRoute,
  ) { }
  
  url: string = environment.url;
  id: any;
  product_id: any;
  products: any;
  product: any;
  images: any;
  trending_top: any[] = [];
  url_image = this.url + 'storage/images/product/';
  cate_id: any;
  count: number = 0;
  product_all: any = [];
  images_array: any[] = [];
  images_array_1: any[] = [];
  inter: any;
  inter1: any;

  image1: any;
  image_tt: any;
  imageAll: any = [];

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.shopService.product_detail(this.id).subscribe(res => {
      this.products = res;
      this.image1 = this.url + this.products.image
    });
    this.shopService.product_images(this.id).subscribe(res => {
      this.images = res;
      this.imageAll = this.images.image_products
      for (i = 0; i < this.imageAll.length; i++) {
        this.image_tt = this.imageAll[i]
        this.images_array.push(this.image_tt.image)
      }
      this.images_array.push(this.products.image);
      var i = 0;
      this.inter = setInterval(() => {
        this.image1 = this.url + this.images_array[i];
        i++;
        if (i >= this.images_array.length) {
          i = 0;
        }
      }, 3000)
    });

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
  changeImage(image: any) {
    this.image1 = this.url + image;
  }

  resetInterval() {
    clearInterval(this.inter);
  }

}
