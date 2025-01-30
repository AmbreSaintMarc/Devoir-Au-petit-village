import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';


@Component({
  selector: 'app-home',
  imports: [ ProductItemComponent, SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService]
})

export class HomeComponent implements OnInit{
  sortByPriceButton = "Trier par prix";
  public products : Product[] = []

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

  SortByPricePipe: "lowest" | "biggest" = "lowest";
  
}

