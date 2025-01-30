import { Component, OnInit, input } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';





@Component({
  selector: 'app-product',
  imports: [ProductItemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductsService]
})

export class ProductComponent implements OnInit{
  public products : Product[] = []

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  
}
