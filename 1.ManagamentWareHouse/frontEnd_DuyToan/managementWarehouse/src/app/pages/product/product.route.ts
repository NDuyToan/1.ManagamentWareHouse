import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { from } from 'rxjs';
import { ProductModule } from './product.module';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'new',
    component: ProductNewComponent,
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductRoutingModule { }
