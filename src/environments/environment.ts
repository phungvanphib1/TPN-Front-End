const urlApi = 'http://127.0.0.1:8000/api/';
export const environment = {
  production: false,

  url: 'http://127.0.0.1:8000/',
  urlAllProducts: urlApi + 'product_list',
  urlTrendingPro: urlApi + 'trendingProduct',
  urlproductnew: urlApi + 'productnew',
  urlAllCategories: urlApi + 'category_list',
  urlSearch: urlApi,
  urlAllproduct_detail: urlApi + 'product_detail',
  urlAddToCart: urlApi + 'add-to-cart/',
  urlGetAllCart: urlApi + 'list-cart/',
  urlDeleteCart: urlApi + 'remove-to-cart/',
  urlUpdatequantity: urlApi + 'update-cart/',

  urlProfile: urlApi+'auth/profile',
  urlCreateOrder : urlApi+'order_create',
  urlOrderStore : urlApi+'order_store',
  urlOrderShow:urlApi+'',

  urlRegister: urlApi + 'register',
  urlLogin: urlApi + 'login-customer',
  urlAllImage: urlApi + 'product_images'
};
