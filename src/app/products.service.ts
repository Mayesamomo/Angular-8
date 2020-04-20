import { Injectable } from '@angular/core';
import { Product } from './DTO/Product';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[]=[];
  constructor() {
    //Q6, crete a constructor and dummy test
    this.products.push(new Product(1,"Dell Laptop",1950.00));
    this.products.push(new Product(2,"Aero Gigabyte",2500.97));
    this.products.push(new Product(3,"Macbook 2019",2750.99));
   }
   getProducts() :Product[]
   {
   //return this.products;
    return this.products;
   }
 
 
 
}
