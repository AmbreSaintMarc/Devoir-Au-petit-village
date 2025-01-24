import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../product/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  public products : Product[] = []
  
  constructor(
    private service: ProductsService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  
}
