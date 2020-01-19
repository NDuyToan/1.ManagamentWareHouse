import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable, BehaviorSubject, Subject } from 'rxjs';

import { URL_BRANDS } from './../../app.const';
import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { Brand} from './../../shared/model/brand.class';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private _closed$ = new Subject();
  public closed$ = this._closed$.asObservable();


  constructor(
    private http: HttpClient,
    private authServerProvider: AuthServerProvider

  ) { }
  private token: string = this.authServerProvider.getLocal();
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.token,
    })
  };

  closed(reason?: any) {
    this._closed$.next(reason);
  }

  getAllBrands():Observable<Brand[]>{
   //return this.http.get<Brand[]>(URL_BRANDS, this.httpOptions);
   return this.http.get<Brand[]>(URL_BRANDS);
 }
 getBrandByID(id:number): Observable<Brand>{
  return this.http.get<Brand>(`${URL_BRANDS}/${id}`, this.httpOptions )
 }
 ceateNewBrand(brand: Brand): Observable<Brand>{
   return this.http.post<Brand>(URL_BRANDS, brand, this.httpOptions )
 }
 editBrand(brand: Brand): Observable<Brand>{
   return this.http.put<Brand>(URL_BRANDS, brand, this.httpOptions)
 }
 deleteBrand(id: number): Observable<any>{
   return this.http.delete(`${URL_BRANDS}/${id}`, this.httpOptions)
 }
}
