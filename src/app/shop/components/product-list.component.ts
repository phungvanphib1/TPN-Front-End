import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: '../templates/product-list.component.html',
})
export class ProductListComponent implements OnInit {

  constructor(private shopService: ShopService) { }
  products: any[] = [];
  categories: any[] = [];
  cate_id: any;
  product_cate: any[] = [];
  p: any = 1;
  url: string = environment.url;
  ngOnInit(): void {
    this.product_list();
    this.category_list();
    // this.band_list();
    // this.serachForm = this.fb.group({
    //   search: [''],
    // })
    // if(this._route.snapshot.params['id'] && this._route.snapshot.params['search'] ){
    //   this.id = this._route.snapshot.params['id'];
    //   this.search = this._route.snapshot.params['search'];
    //   console.log(this.id);
    //   console.log(this.search);
    //   if(this.search=="cate")
    //   {
    //     this.product_OfCate(this.id)
    //   }else if( this.search == "brand"){
    //     this.product_OfBrand(this.id)
    //   }else {
    //     this.trending();
    //   }
    // }
    // console.log(this.product_list());
  }

  product_list(){
    this.shopService.product_list().subscribe(res =>{
      this.products = res;
    })
  }
  category_list(){
    this.shopService.category_list().subscribe(res => {
      this.categories = res;
    })
  }
  product_OfCate(cate_id:any){
    this.cate_id= cate_id;
    this.shopService.category_list().subscribe(res =>{
      this.categories= res;
      for(const category of this.categories){
        if(this.cate_id == category.id){
          this.products = category.products;
          this.product_cate = this.products;
        }
      }
    })
  }
}
