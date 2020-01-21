import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {PageEvent} from '@angular/material/paginator';

import { Product} from './../../shared/model/product.model';
import { ProductService } from './product.service';
import { ProductNewComponent } from './product-new/product-new.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[] = [];
  public displayedColumns: string[] = ['id', 'productName', 'priceProduct', 'quantityProduct', 'action'];

  public pageSizeOptions: number[] = [5, 10];
  pageEvent: PageEvent;
  datasource: null;
  pageIndex:number;
  pageSize:number;
  length:number;
  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
   // private dialogRef: MatDialogRef<ProductNewComponent>

  ) { }
  //@ViewChild(MatPaginator) paginator: MatPaginator;
//  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
//   ngAfterViewInit() {
//     this.products.paginator = this.paginator;
//   }

  ngOnInit() {
    //this.loadProducts();

   // this.products.paginator = this.paginator;
   //this.onGetData(0,5);
   this.getServerData(null);
  //  this.dialogRef.afterClosed().subscribe( ()=>{
  //   this.getServerData(null);
  // })
   //console.log('page size:',this.pageEvent.pageSize );
   //console.log('page index:',this.pageEvent.pageIndex );
  // this.onGetData1();

  }
  loadProducts(){
   return this.productService.getAllProducts().subscribe( (data) => {
     this.products = data.content;
     //console.log(this.products);
    } )
  }
  public getServerData(event?:PageEvent){
    if(event==null){
     var index = 0;
     var size = 5;
    } else {
      var index = event.pageIndex;
      var size = event.pageSize
    }
    this.productService.getProductByPage(index,size).subscribe(
      response =>{
         // console.log("response");
          // console.log(response);
          // console.log(event);
          this.products = response.content;
          this.pageIndex = response.pageable.pageNumber;
          this.pageSize = response.pageable.pageSize;
          this.length = response.totalElements;

      },

    );
    return event;
  }
  openProductNew(){
    var dialogRef = this.dialog.open(ProductNewComponent, {
      width: '80%',
    });
    dialogRef.afterClosed().subscribe( ()=>{
      //this.getServerData(null);
      this.productService.getProductByPage(this.pageIndex,this.pageSize).subscribe(
        response =>{
          // console.log("response");
           // console.log(response);
           // console.log(event);
           console.log(this.pageIndex);
           this.products = response.content;
           this.pageIndex = response.pageable.offset;
           this.pageSize = response.pageable.pageSize;
           this.length = response.totalElements;

       },
      )
    })
  }
  public productTest: Product = {

    productName: "tesst11",
    priceProduct: 1234,
    quantityProduct: 22,

  }
  addProduct(product: Product){
    this.productService.creatNewProduct(product).subscribe(
      ()=>{

        console.log('page index: '+ this.pageIndex);
        console.log('page size:'+ this.pageSize);
        this.productService.getProductByPage()
      }
    );
  }
  //this.dialogRef.afterClosed().subscribe( ()=>{ console.log('colose');})
  // this.dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`); // Pizza!
  // });
  // this.dialogRef.close('Pizza!');

  // onGetData(pageIndex: number,  pageSize: number){
  //   //console.log('page size:',this.pageEvent.pageSize );
  //  // console.log('page index:',this.pageEvent.pageIndex );
  //   return this.productService.getProductByPage(pageIndex,pageSize).subscribe( (data) =>{this.products = data.content;})

  // }
  // onGetData1(){
  //   return this.productService.getProductByPage(this.pageEvent.pageIndex,this.pageEvent.pageSize).subscribe( (data) =>{this.products = data.content;})
  // }
  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  // }


}

