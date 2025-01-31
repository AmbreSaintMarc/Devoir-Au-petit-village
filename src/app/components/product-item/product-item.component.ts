import { Component, inject, input } from '@angular/core';
import { Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
    product = input.required<Product>()

    constructor(private router: Router) {}
    navigateToProductDetails() {
      this.router.navigateByUrl("product/:id")
    }
}
