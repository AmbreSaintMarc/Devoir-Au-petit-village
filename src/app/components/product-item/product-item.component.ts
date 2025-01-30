import { Component, inject, input } from '@angular/core';
import { Product } from '../../services/products.service';
import { Router } from '@angular/router';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';

@Component({
  selector: 'app-product-item',
  imports: [SortByPricePipe],
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
