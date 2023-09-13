import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model:AddCategoryRequest): Observable<void>{
    return this.http.post<void>(environment.apiBaseUrl + '/api/Categories', model);
  }

  getAllCategories(): Observable<Category[]>
  {
    return this.http.get<Category[]>(environment.apiBaseUrl + '/api/Categories');
  }
}
