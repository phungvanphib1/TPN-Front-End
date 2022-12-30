import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent implements OnInit {
  products: any;
  listCart: any;
  url: string = environment.url;
  customer_id: any;
  orders: any;
  id_user: any;
  name: any;
  totalPrice: number = 0;
  error: any;
  constructor(private shopService: ShopService,
    private _Router: Router,
    private _AuthService: AuthService,
    private ShopService: ShopService,
    private route: ActivatedRoute,) { }
    check: any = this._AuthService.checkAuth();
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
  ngDoCheck(): void{
    if(!this.check){
      this.check = this._AuthService.checkAuth();

    }
    if(this.check && !this.name && !this.id_user){
        this.profile();
    }
    this.error;
}
profile(){
  if(this._AuthService.checkAuth()) {
      this._AuthService.profile().subscribe(res =>{
        this.id_user = res.id;
        this.name = res.name;
      },e=>{
        console.log(e);
        this._AuthService.logout();
      })
  }
  else{
    this._Router.navigate(['/login']);
  }
}


  logout() {
    this._AuthService.logout();
    this.check = this._AuthService.checkAuth();
    this.listCart = [];
    this._Router.navigate(['login']);
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
