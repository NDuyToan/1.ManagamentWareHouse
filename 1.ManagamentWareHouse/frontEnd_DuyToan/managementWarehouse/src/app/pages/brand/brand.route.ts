import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandComponent } from './brand.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';
import { BrandNewComponent } from './brand-new/brand-new.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: BrandComponent
  },
  {
    path: 'detail/:id',
    component: BrandDetailComponent
  },
  {
    path: 'new',
    component: BrandNewComponent
  },
  {
    path: 'edit/:id',
    component: BrandEditComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BrandRoutingModule { }
