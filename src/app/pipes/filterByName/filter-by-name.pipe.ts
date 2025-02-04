import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../services/products.service';

@Pipe({
  name: 'filterByName',
  pure: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(value: any[]): any {
    
  }

}


