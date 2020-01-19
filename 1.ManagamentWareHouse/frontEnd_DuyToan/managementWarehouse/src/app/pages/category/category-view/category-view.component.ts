import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})

export class CategoryViewComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }
  public category: Category;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.categoryService.getCategoryByID(id).subscribe( (data)=> {
      this.category = data;
    });
  }
  onBack(){
    window.history.back();
  }

}
