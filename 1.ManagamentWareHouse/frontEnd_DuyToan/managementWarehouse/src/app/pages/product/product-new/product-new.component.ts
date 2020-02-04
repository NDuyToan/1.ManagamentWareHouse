import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {
    if(data){
      this.product = data.product;
    }

   }
  public brands: Brand[] = [];
  public brand: Brand;
  public category: Category;
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
      this.category = this.categories[this.product.category.id];
      //console.log(this.product.category);

    })

    this.brandService.getAllBrands().subscribe( data =>{
      this.brands = data;
   })
   if(this.product ){
    // console.log(this.product);
     //console.log(this.categories);
     //console.log(this.category);
    this.frNewProduct.setValue({
      productName:this.product.productName,
      priceProduct:this.product.priceProduct,
     quantityProduct:this.product.quantityProduct,
     category: this.product.category,
     brand:this.product.brand,
    })

   }


  }

  Close(){
    this.dialogRef.close('close');
  }

  Save(){
    this.dialogRef.close(this.frNewProduct.value);
  }

}
