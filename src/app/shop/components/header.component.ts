import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
})
export class HeaderComponent implements OnInit {
  products: any;
  url: string = environment.url;
  constructor(private shopService: ShopService, private _Router: Router,) { }
  ngOnInit() {
  }
  handdleSearch(name: any){
    const keywork = name.target.value;
  const search = this.shopService.searchProductList(keywork).then(res => {
    this.products = res;
  })
  }
  reloadCurrentPage(id:any){
    this._Router.navigate(['/product-detail/'+id]);
  }

}
