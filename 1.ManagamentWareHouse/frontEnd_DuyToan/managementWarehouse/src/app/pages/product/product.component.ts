import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';

import { Product} from './../../shared/model/product.model';
import { ProductService } from './product.service';
import { ProductNewComponent } from './product-new/product-new.component';
//import { ResponseProduct } from './../../shared/model/responseProduct.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private paginator: MatPaginator;
  public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'productName', 'priceProduct', 'quantityProduct','brand','category', 'action'];
  public currentPageIndex:number = 0;
  public currentPageSize: number = 5;
  public currentItemsPerPage: number;
  public currentLength:number;

  private defaultPageIndex:number = 0;
  private defaultPageSize = 5;
  private isNewPage:boolean=false;

  public pageSizeOptions: number[] = [5, 10, 20, 50];
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number = 0;
  pageSize:number = 5;
  length:number;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,



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
    if( event ==null){
      var index:number = 0;
      var size:number = this.currentPageSize;
    }

    index = this.currentPageIndex;
    size = this.currentPageSize;

    this.productService.getProductByPage(index, size).subscribe(
      (response)=>{
       // console.log(response);
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
          this.getProducts();
        })
      }

    })
  }


  // getProducts(event?:PageEvent){
  //   if(event != null){
  //     this.defaultPageIndex = this.currentPageIndex;
  //     this.defaultPageSize = this.currentPageSize;
  //   }
  //   this.productService.getProductByPage(this.defaultPageIndex, this.defaultPageSize).subscribe(
  //     (response)=>{
  //       this.products = response.content;
  //       this.length = response.totalElements;
  //       if( response.last ==true && response.numberOfElements == this.currentPageSize){
  //         this.isNewPage = true;
  //         this.currentPageIndex++;
  //         console.log('tang page index');
  //         console.log(`new page index: ${this.currentPageIndex}`);
  //       }
  //     });

  // }

  // public getServerData(event?:PageEvent){
  //   if(event==null){
  //   //  var index = 0;
  //   //  var size = 5;

  //   } else {
  //     var index = event.pageIndex;
  //     var size = event.pageSize;
  //     this.currentPageIndex = event.pageIndex;
  //     this.currentPageSize = event.pageSize;

  //   }
  //   this.productService.getProductByPage(index,size).subscribe(
  //     response =>{
  //         // console.log(response);
  //         // console.log(event);
  //         this.products = response.content;
  //         this.length = response.totalElements;
  //         this.currentItemsPerPage = response.numberOfElements;

  //         // this.pageIndex = response.pageable.pageNumber;
  //        // this.pageSize = response.pageable.pageSize;

  //     },
  //   );
  //   return event;
  // }

  // openProductNew(){


  //   let dialogRef = this.dialog.open(ProductNewComponent, {
  //     width: '80%',
  //   })
  //   dialogRef.afterClosed().subscribe( (result) => {

  //     this.productService.creatNewProduct(result).subscribe( ()=> {

  //      this.productService.getProductByPage(2,5).subscribe(
  //       response => {
  //         console.log(response);
  //           // console.log(event);
  //           this.products = response.content;
  //           // this.pageIndex = response.pageable.pageNumber;
  //           // this.pageSize = response.pageable.pageSize;
  //           // this.length = response.totalElements;
  //       },
  //     );
  //     });
  //   })
  // }

  // openProductNew1(){


  //   let dialogRef = this.dialog.open(ProductNewComponent, {
  //     width: '80%',
  //   })
  //   dialogRef.afterClosed().subscribe( (result) => {
  //     this.productService.creatNewProduct(result).subscribe( ()=>{
  //      // console.log(this.currentPageIndex);
  //      // console.log(`items ${this.currentItemsPerPage}`);
  //      if( this.currentItemsPerPage==this.currentPageSize) {
  //        this.currentPageIndex++;
  //        console.log(`current page index: ${this.currentPageIndex}`);
  //      }
  //      console.log(`page size: ${this.currentPageSize}`);
  //      console.log(`current page index: ${this.currentPageIndex}`);
  //      console.log(`current items Per page ${this.currentItemsPerPage}`);
  //       this.productService.getProductByPage(this.currentPageIndex, this.currentPageSize).subscribe(
  //         response => {
  //           this.products = response.content;
  //           console.log(response);
  //         })
  //      // this.getServerData()
  //     })
  //   })
  // }





}

