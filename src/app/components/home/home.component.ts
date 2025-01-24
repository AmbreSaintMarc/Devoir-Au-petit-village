import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../product/products.service';
import { ProductItemComponent } from '../../product-item/product-item.component';

@Component({
  selector: 'app-home',
  imports: [ ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService]
})

export class HomeComponent implements OnInit{
  public products : Product[] = []
  constructor(private service: ProductsService) { }
  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

}

