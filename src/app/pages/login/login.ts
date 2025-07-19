import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserService} from '../../services/user-service';
import {LoginRequest} from '../../request/login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(private userService: UserService) {}

  onLogin() {
    this.loading = true;
    this.errorMessage = null;

    const loginRequest: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.userService.login(loginRequest).subscribe({
      next: (response) => {
        // handle successful login (save token, redirect, etc.)
        console.log("Login success: "+response);
        this.loading = false;
        // Example: console.log(response);
      },
      error: (error) => {
        // handle error
        this.loading = false;
        this.errorMessage = error?.error?.message || 'Login failed.';
      }
    });
  }
}
