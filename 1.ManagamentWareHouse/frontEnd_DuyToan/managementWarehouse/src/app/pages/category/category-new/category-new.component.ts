import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

import { CategoryService } from './../category.service';
import { Category } from './../../../shared/model/category.model';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
  ) { }
  frNewCategory = this.fb.group({
    cateName: ['', Validators.required]
  })
  category: Category;

  ngOnInit() {
  }
  onSubmit(){
    this.category = this.frNewCategory.value;
    this.categoryService.createNewCategory(this.category).subscribe( ()=>  this.goBack());

  }
  goBack(){
    window.history.back();
  }

}
