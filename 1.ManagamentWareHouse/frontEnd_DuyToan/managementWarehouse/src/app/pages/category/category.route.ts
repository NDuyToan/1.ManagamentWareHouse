import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { from } from 'rxjs';
import { CategoryModule } from './category.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'new',
    component: CategoryNewComponent
  },
  {
    path: 'view/:id',
    component: CategoryViewComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutingModule { }
