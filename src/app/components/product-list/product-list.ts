import { Component, Input } from '@angular/core';
import {Product} from '../../models/product';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input() products: Product[] = [
    {
      id: 1,
      name: 'Product A',
      brand: 'Brand X',
      price: 29.99,
      inventory: 15,
      description: 'Description for Product A',
      category: { id: 1, name: 'Category 1' },
      image: []
    },
    {
      id: 2,
      name: 'Product B',
      brand: 'Brand Y',
      price: 59.99,
      inventory: 30,
      description: 'Description for Product B',
      category: { id: 2, name: 'Category 2' },
      image: []
    }

  ];

  public imageBaseUrl = 'http://localhost:8080';
}
