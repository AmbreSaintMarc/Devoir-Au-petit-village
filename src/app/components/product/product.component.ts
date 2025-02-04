import { Component, inject } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductsService]
})

export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  products: Product | undefined;
  productsId = Number(this.route.snapshot.params['id']);

  constructor() {

    this.products = this.productsService.getProductsById(this.productsId);
  }
}
