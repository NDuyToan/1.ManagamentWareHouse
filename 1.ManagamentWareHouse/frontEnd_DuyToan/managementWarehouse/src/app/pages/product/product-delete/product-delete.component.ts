import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],

})
export class ProductDeleteComponent implements OnInit {

  public productName;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProductDeleteComponent>
  ) {
    this.productName = data.productName;
  }

  ngOnInit() {
  }
  cancel(){
   this.dialogRef.close('cancel');
  }
  delete(){
    this.dialogRef.close('delete');
  }

}
