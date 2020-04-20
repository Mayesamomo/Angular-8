import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './DTO/Product';
@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(items: any[], searchProduct:string): any[] {
   if(!items) return[];
   if(!searchProduct) return items;
   searchProduct= searchProduct.toLowerCase();
   return items.filter((p:Product)=>{return p.productName.toLowerCase().includes(searchProduct)});
  }

}
