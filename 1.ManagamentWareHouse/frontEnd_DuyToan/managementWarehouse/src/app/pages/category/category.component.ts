import { Component, OnInit } from '@angular/core';

import { CategoryService } from './category.service';
import { Category } from './../../shared/model/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
  ) { }
  public categories: Category[] = [];
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories():void{
    this.categoryService.getAllCategories().subscribe( (data) => {
      this.categories = data;
    })
  }
  trackByID( index:number, item: Category): number{
    return item.id;
  }

}
