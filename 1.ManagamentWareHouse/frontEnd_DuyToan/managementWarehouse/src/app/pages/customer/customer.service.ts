import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from './../../shared/model/customer.model';
import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { URL_CUSTOMER} from './../../app.const';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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
  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(URL_CUSTOMER, this.httpOptions);
  }

}
