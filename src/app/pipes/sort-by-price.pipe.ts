import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductsService } from '../services/products.service';



@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  
  transform(value: Product[], order: "lowest" | "biggest" = "lowest"): Product[] {
  
    return value.sort((a, b) => {
      if (order === "lowest") {
        return a.price - b.price;
      } else if (order === "biggest") {
        return b.price - a.price;
      }
      return 0;
    });
    
  }

}
