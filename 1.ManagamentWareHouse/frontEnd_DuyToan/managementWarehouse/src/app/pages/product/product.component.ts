import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Product} from './../../shared/model/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'productName', 'priceProduct', 'quantityProduct', 'action'];
  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit() {
    this.loadProducts();

  }
  loadProducts(){
   return this.productService.getAllProducts().subscribe( (data) => this.products = data )
  }

}

