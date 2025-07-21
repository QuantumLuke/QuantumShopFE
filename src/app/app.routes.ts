import { Routes } from '@angular/router';
import {Login} from './pages/login/login';
import {ProductPage} from './pages/product-page/product-page';
import {ProductInsertPage} from './pages/product-insert-page/product-insert-page';

export const routes: Routes = [
  { path: '', redirectTo: 'product-page', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'product-page', component: ProductPage},
  { path: 'products/new', component: ProductInsertPage}
];
