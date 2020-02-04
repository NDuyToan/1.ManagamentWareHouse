import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material';


import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.route';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductNewComponent,
    ProductDeleteComponent
    ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  entryComponents: [
    ProductNewComponent,
    ProductDeleteComponent
  ]
})
export class ProductModule { }
