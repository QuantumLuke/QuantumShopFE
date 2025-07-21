import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {ApiResponse} from '../response/api-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiBaseUrl + 'products/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'all');
  }

  insertProduct(product: Product): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'add', product);
  }


  }
