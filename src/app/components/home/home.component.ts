import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../services/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { SortByPricePipe } from '../../pipes/sortByprice/sort-by-price.pipe';



@Component({
  selector: 'app-home',
  imports: [ ProductItemComponent, SortByPricePipe],
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

  
  sortOrder: "none" | "lowest" | "biggest" = "none";
 
  sortByLowest() {

    this.sortOrder = "lowest";
  }

  sortByBiggest() {

    this.sortOrder = this.sortOrder === 'biggest' ? 'lowest' : 'biggest';
  }
}