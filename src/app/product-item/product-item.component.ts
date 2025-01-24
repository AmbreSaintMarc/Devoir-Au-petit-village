import { Component, input } from '@angular/core';
import { Product } from '../product/products.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
    product = input.required<Product>()

    
}
