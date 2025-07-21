import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginRequest} from '../request/login-request';
import {ApiResponse} from '../response/api-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiBaseUrl + 'auth';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<ApiResponse> {
    const url = this.baseUrl + 'login';

    return this.http.post<ApiResponse>(url, request);
  }
}
