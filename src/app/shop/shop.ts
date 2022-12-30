export interface Product {
  name: any;
  price: any;
  quantity: any;
  sale_price: any;
  image:{ url: string};
  description: any;
}
export interface Category {
  name: any;
}
export interface Images{
  name: any
}
export interface User {
  id?: any;
  name?:any;
  address?:any;
  phone?:any;
  email:any;
  password:any;
}
export interface Order{
  note?:any;
  total:any;
  customer_id: any;
}
