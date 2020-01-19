import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category.route';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';


@NgModule({
  declarations: [CategoryComponent, CategoryNewComponent, CategoryViewComponent, CategoryEditComponent],
  imports: [
    CommonModule,
   // FormsModule,
    ReactiveFormsModule,
    CategoryRoutingModule

  ]
})

export class CategoryModule { }
