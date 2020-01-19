import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { URL_CATEGORY } from './../../app.const';
import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { Category } from './../../shared/model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(URL_CATEGORY, this.httpOptions);
  }
  createNewCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(URL_CATEGORY, category, this.httpOptions);
  }
  getCategoryByID(id: number): Observable<Category>{
    return this.http.get<Category>(`${URL_CATEGORY}/${id}`, this.httpOptions);
  }
  editCategory( category: Category): Observable <Category>{
    return this.http.put<Category>(URL_CATEGORY, category, this.httpOptions);
  }
}
