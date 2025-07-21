import {Component, OnInit} from '@angular/core';
import {ProductList} from '../../components/product-list/product-list';
import {ProductService} from '../../services/product-service';
import {Product} from '../../models/product';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductList, RouterLink],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      products => this.products = products
    );


  }


}
