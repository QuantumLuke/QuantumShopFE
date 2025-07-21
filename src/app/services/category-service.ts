import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Category} from '../models/category';
import {ApiResponse} from '../response/api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/v1/categories/';
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'all');
  }
}
