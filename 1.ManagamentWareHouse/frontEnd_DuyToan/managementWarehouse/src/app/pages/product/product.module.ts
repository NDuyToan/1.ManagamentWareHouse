import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.route';
import { ProductNewComponent } from './product-new/product-new.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductNewComponent
    ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class ProductModule { }
