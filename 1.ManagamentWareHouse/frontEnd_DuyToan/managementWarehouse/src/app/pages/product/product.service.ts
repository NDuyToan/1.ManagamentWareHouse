import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { Product } from './../../shared/model/product.model';
import { URL_PRODUCTS } from './../../app.const';
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


  // getAllProducts(): Observable<Product[]>{
  //   return this.http.get<Product[]>(URL_PRODUCTS, this.httpOptions);
  // }
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(URL_PRODUCTS);

  }
  getProductByPage( pageIndex:number,  pageSize: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${URL_PRODUCTS}?page=${pageIndex}&size=${pageSize}`);
  }
  // getAllProducts():Observable<Product[]>{
  //   return this.http.get<Product[]>(URL_PRODUCTS, this.httpOptions);
  // }
}
