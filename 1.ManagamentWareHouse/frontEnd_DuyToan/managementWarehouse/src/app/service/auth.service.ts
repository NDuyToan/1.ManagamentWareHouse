import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-service.service';
import { LoginDto } from '../shared/model/userLogin';

import { of as _observableOf, Observable } from 'rxjs';
import {
  mergeMap as observableMergeMap,
  catchError as observableCatch
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  public url = "http://localhost:9000/api/authenticate";

  name() {
    return 'authenticate';
  }

  login(body : LoginDto) : Observable<any> {
    return this.http.post(this.url,body).pipe(
      observableMergeMap((response: any) => {
        console.log("check response", response);
        if (response) {
          return _observableOf(true);
        } else {
          console.log("check error",response);
          return _observableOf(response.success);
        }
      })
      )
      .pipe(
        observableCatch((response: any) => {
          console.log("check error",response);
          return _observableOf(false);
        })
      );
  }


}
