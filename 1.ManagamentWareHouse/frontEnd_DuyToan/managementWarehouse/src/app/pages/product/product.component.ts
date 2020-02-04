import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Product} from './../../shared/model/product.model';
import { ProductService } from './product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
//import { ResponseProduct } from './../../shared/model/responseProduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  //private paginator: MatPaginator;
  public products: Product[] = [];
  public displayedColumns: string[] = ['index','id', 'productName', 'priceProduct', 'quantityProduct','brand','category', 'action'];
  public currentPageIndex:number =0;
  public currentPageSize: number = 5;
  //public currentItemsPerPage: number;
  public currentLength:number;

  public defaultPageIndex:number = 0;
  public defaultPageSize = 5;
  //private isNewPage:boolean=false;

  public pageSizeOptions: number[] = [5, 10, 20, 50];
  //pageEvent: PageEvent;
  //datasource: null;
  // pageIndex:number = 0;
  // pageSize:number = 5;
  length:number;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private routerService: Router,

  ) { }


  ngOnInit() {

   this.getProducts();

  }



  handlePageChange(event:PageEvent){
    this.currentPageIndex = event.pageIndex;
    this.currentPageSize = event.pageSize;
    this.currentLength = event.length;
    this.getProducts(event);
  }

  showIndex(i){
    return this.currentPageIndex*this.currentPageSize+i;

  }

  getProducts(event?:PageEvent){
    // if( event ==null){
    //   var index:number = this.currentPageIndex;
    //   var size:number = this.currentPageSize;
    // }
    // else{
    //   index = this.currentPageIndex;
    //   size = this.currentPageSize;
    // }
   var index = this.currentPageIndex;
   var size = this.currentPageSize;
    this.productService.getProductByPage(index, size).subscribe(
      (response)=>{
        this.products = response.content;
        this.length = response.totalElements;

      });
  }

  openProductNew(){
    let dialogRef = this.dialog.open(ProductNewComponent, {
      width: '80%',
    })
    dialogRef.afterClosed().subscribe( (result) => {
      if(result != 'close'){
        this.productService.creatNewProduct(result).subscribe( ()=>{
          this.paginator.firstPage();
          this.getProducts(null);

        })
      }

    })
  }
  goToBrand(id){
    this.routerService.navigate([`brand/detail/${id}`]);
  }
  goToCategory(id){
    this.routerService.navigate([`category/view/${id}`]);
  }
  deleteProduct(product:Product){
    let dialogRef = this.dialog.open(ProductDeleteComponent, {
      width: '50%',
      data: {productName: product.productName}
    })
    dialogRef.afterClosed().subscribe( (result)=>{
      if(result == 'delete'){
        this.productService.deleteProduct(product.id).subscribe( ()=>{
          //this.paginator.firstPage();
          this.getProducts(null);
        })
      }
    })
  }



  editProduct(product: Product){
    let dialogRef = this.dialog.open(ProductNewComponent, {
      width: '80%',
      data: {product: product}
    });
    dialogRef.afterClosed().subscribe( (data) =>{
      console.log(data);
     if(data !='close'){
      this.productService.editProduct(data).subscribe( ()=>{this.getProducts(null)})
     }

    })
  }



}

