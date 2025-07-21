import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Category, Product} from '../../models/product';
import {ProductService} from '../../services/product-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-insert-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './product-insert-page.html',
  styleUrl: './product-insert-page.css'
})
export class ProductInsertPage {
  productForm: FormGroup;
  categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
  ];

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      inventory: [null, [Validators.required, Validators.min(0)]],
      description: [''],
      category: [null, Validators.required],
      image: [[]]
    });
  }

  submit() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.insertProduct(newProduct).subscribe(() => {
        this.returnToProductPage();
      });
    }
  }

  returnToProductPage() {
    this.router.navigate(['/product-page']).then(r => true);
  }

}
