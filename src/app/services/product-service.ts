import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/v1/products/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<{ data: Product[] }>(this.baseUrl + 'all').pipe(
      map(response => {
        return response.data;
      })
    );
  }

  insertProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'add', product);
  }


  }
