import { Injectable } from '@angular/core';
// import { AppConsts } from '@shared/AppConsts';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of as _observableOf, Observable } from 'rxjs';
import {
  mergeMap as observableMergeMap,
  catchError as observableCatch
} from 'rxjs/operators';
// import { NotifyService } from '@abp/notify/notify.service';
// import { PagedRequestDto } from '@shared/paged-listing-component-base';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService {
  protected baseUrl = 'http://localhost:9000/';
  protected http: HttpClient;

  abstract name();

  constructor(http: HttpClient) {
    this.http = http;
  }

  protected get auth() {
    return this.baseUrl + 'api/' + this.name();
  }

  // protected get rootApi() {
  //   return this.baseUrl + 'api/services/app/';
  // }

  // protected get getAllApi() {
  //   return this.rootApi + this.name() + '/' + 'GetAllPaging';
  // }


  // protected get getAllApiNoPaging() {
  //   return this.rootApi + this.name() + '/' + 'GetAllNoPaging';
  // }

  // protected get getApi() {
  //   return this.rootApi + this.name() + '/' + 'Get';
  // }

  // protected get insertApi() {
  //   return this.rootApi + this.name() + '/' + 'Insert';
  // }

  // protected get updateApi() {
  //   return this.rootApi + this.name() + '/' + 'Update';
  // }

  // protected get deleteApi() {
  //   return this.rootApi + this.name() + '/' + 'Delete';
  // }

  // protected get createApi() {
  //   return this.rootApi + this.name() + '/' + 'Create';
  // }

  // getAllNoPaging(): Observable<any> {
  //   return this.http.get(this.getAllApiNoPaging);
  // }

  // getAll(request: PagedRequestDto): Observable<ResultDto<T>> {
  //   return this.http.post<any>(this.getAllApi, request);
  // }
  // get(id: any): Observable<any> {
  //   return this.http.get(this.getApi + `?id=${id}`);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete<any>(this.deleteApi, {
  //     params: new HttpParams().set('Id', id)
  //   });
  // }

  // update(data: object): Observable<any> {
  //   return this.http.put(this.updateApi, data);
  // }

  // insert(data: object): Observable<any> {
  //   return this.http.post(this.insertApi, data);
  // }

}

export class ReponseDto {
  result: any | undefined;
  targetUrl: any | undefined;
  success: boolean | undefined;
  error: ErrorDto | undefined;
  message: any | undefined;
  unAuthorizedRequest: boolean | undefined;
  __abp: boolean | undefined;
}

export class ResonseGetItem<T> extends ReponseDto {
  result: T | undefined;
}

export class ReponseGetAllItem<T> extends ReponseDto {
  result: ResultDto<T> | undefined;
}

export class ErrorDto {
  code: number | undefined;
  message: string | undefined = 'Error';
  details: any | undefined;
  validationErrors: any | undefined;
}

export class ResultDto<T> {
  result: {
    totalCount: number | undefined,
    items: T[] | undefined
  };
}

