import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Brand } from './../../../shared/model/brand.class';
import { BrandService } from './../brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
  ) { }
  frEditBrand = this.fb.group({
    id: [''],
    brandName: ['',Validators.required]
  })
  public brand: Brand;

  ngOnInit() {
    this.updateForm();
  }

  onSubmit(){
    this.brandService.editBrand(this.frEditBrand.value).subscribe();
    this.goBack();
  }

  updateForm(){
     let id = this.activatedRoute.snapshot.params['id'];
     this.brandService.getBrandByID(id).subscribe( brand =>
      {
        this.brand = brand;
        this.frEditBrand.patchValue({
          id:this.brand.id,
          brandName: this.brand.brandName
        })
      });
  }

  goBack(){
    window.history.back()
  }

}
