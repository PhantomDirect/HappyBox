import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(products: Product[], type = ''): any {

    return products.filter( product => {
      if(type == 'all'){
        return products
      }else{
      return product.type == type}
    })
  }

}
