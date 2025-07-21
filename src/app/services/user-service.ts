import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginRequest} from '../request/login-request';
import {ApiResponse} from '../response/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<ApiResponse> {
    const url = this.baseUrl + 'auth/login';

    return this.http.post<ApiResponse>(url, request);
  }
}
