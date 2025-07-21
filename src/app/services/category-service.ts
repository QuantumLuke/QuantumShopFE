import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../response/api-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.apiBaseUrl + 'categories/';
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'all');
  }
}
