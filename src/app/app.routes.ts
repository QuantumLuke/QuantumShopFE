import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import {ProductPage} from './pages/product-page/product-page/product-page';

export const routes: Routes = [
  { path: '', redirectTo: 'product-page', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'product-page', component: ProductPage}
];
