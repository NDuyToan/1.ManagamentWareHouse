import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


import { CategoryService } from './../category.service';
import { Category } from './../../../shared/model/category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { }
  frEditCategory = this.fb.group({
    id: [''],
    cateName: ['', Validators.required]
  })

  private category: Category;
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.categoryService.getCategoryByID(id).subscribe( (category)=>{
      this.frEditCategory.patchValue({
        id: category.id,
        cateName: category.cateName
      })
    })
  }
  onSubmit(){
    this.categoryService.editCategory(this.frEditCategory.value).subscribe( ()=>{ this.goBack()});
  }
  goBack(){
    window.history.back();
  }

}
