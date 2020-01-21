import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { Category } from  './../../../shared/model/category.model';
import { Brand } from  './../../../shared/model/brand.class';
import { Product } from  './../../../shared/model/product.model';
import { CategoryService } from './../../category/category.service';
import { BrandService } from './../../brand/brand.service';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductNewComponent>,

  ) { }
  public brands: Brand[] = [];
  public categories: Category[] = [];
  public product: Product;



  frNewProduct = this.fb.group({
    productName:[''],
    priceProduct:[''],
    quantityProduct:[''],
    category:[null],
    brand:[null,],
  })

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe( (data) => {
      this.categories = data;
    })
    this.brandService.getAllBrands().subscribe( data =>{

      this.brands = data;

   })

  }
  Close(){
    this.frNewProduct.reset();
    this.dialogRef.close();
  }
  onSubmit(){
    console.log(this.frNewProduct.value);
    this.productService.creatNewProduct(this.frNewProduct.value).subscribe();
    //this.Close();
    this.dialogRef.close('submited success');
    this.dialogRef.afterClosed().subscribe( (result)=>{console.log(`dialog result: ${result}`);})
  }

}
