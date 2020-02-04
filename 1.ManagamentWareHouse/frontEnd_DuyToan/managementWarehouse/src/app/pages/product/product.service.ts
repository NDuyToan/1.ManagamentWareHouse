import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { Product } from './../../shared/model/product.model';
import { URL_PRODUCTS } from './../../app.const';
import { ResponseProduct } from './../../shared/model/responseProduct.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private authServerProvider: AuthServerProvider,
  ) { }
  private token:string = this.authServerProvider.getLocal();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(URL_PRODUCTS);

  }
  getProductByPage( pageIndex:number = 0,  pageSize: number = 5): Observable<ResponseProduct>{
    return this.http.get<ResponseProduct>(`${URL_PRODUCTS}?page=${pageIndex}&size=${pageSize}`);
  }
  // getAllProducts():Observable<Product[]>{
  //   return this.http.get<Product[]>(URL_PRODUCTS, this.httpOptions);
  // }
  creatNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(URL_PRODUCTS, product);
  }
  deleteProduct(id: number){
    return this.http.delete(`${URL_PRODUCTS}/${id}`);
  }
  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(URL_PRODUCTS, product);
  }
}
