import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrandComponent } from './brand.component';
import { BrandRoutingModule } from './brand.route';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandNewComponent } from './brand-new/brand-new.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { BrandDeleteComponent } from './brand-delete/brand-delete.component';


// const routes: Routes = [
//   {
//     path: '',
//     component: BrandComponent
//   }
// ]

@NgModule({
  declarations: [BrandComponent,
    BrandDetailComponent,
    BrandNewComponent,
    BrandEditComponent,
    BrandDeleteComponent,
   ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    FormsModule,
    ReactiveFormsModule
  //  RouterModule.forChild(routes)
  ],
  entryComponents: [BrandDeleteComponent]
})
export class BrandModule { }
