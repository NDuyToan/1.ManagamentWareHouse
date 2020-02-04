// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
// import { Observable } from "rxjs";

// export class AuthInterceptor implements HttpInterceptor {
//   private token:string = localStorage.getItem("token");
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const cloneReq = req.clone({
//       params: req.params.set(
//         "auth-token",
//         this.token
//       )
//     });
//     return next.handle(cloneReq);
//   }
// }
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  // intercept(
  //   req: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   const cloneReq = req.clone({
  //     params: req.params.set(
  //       "auth-token",
  //       "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU3OTM0MDA0MX0.9wdOlg9B_oZuzrGU5vgSIfJ4DAW7JjSE2wrOQ6qlpHz0-r8oR3eaAdkGVbQ5ewM7Ab7Di2uhNUqC9Ihrs8TYig"
  //     )
  //   });
  //   return next.handle(cloneReq);
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken:string =  `Bearer ${sessionStorage.getItem('token')}`;
    const auth = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU3OTM0MDA0MX0.9wdOlg9B_oZuzrGU5vgSIfJ4DAW7JjSE2wrOQ6qlpHz0-r8oR3eaAdkGVbQ5ewM7Ab7Di2uhNUqC9Ihrs8TYig"
    //console.log(authToken);

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    // const authReq = req.clone({
    //   headers: req.headers.set('Authorization', auth)
    // });
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
