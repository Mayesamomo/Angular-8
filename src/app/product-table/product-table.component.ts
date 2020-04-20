import { Component, OnInit } from '@angular/core';
import { Product } from '../DTO/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products: Product[]=[];
  errorMsg : string = null;
  constructor(private productService : ProductsService) { 
    //Q3, crete a constructor and dummy test
    //this.products.push(new Product(1,"Dell Laptop",1950.00));
    ///this.products.push(new Product(2,"Aero Gigabyte",2500.97));
    //this.products.push(new Product(3,"Macbook 2019",2750.99));
  }

  ngOnInit() {
    
  }
  

}
