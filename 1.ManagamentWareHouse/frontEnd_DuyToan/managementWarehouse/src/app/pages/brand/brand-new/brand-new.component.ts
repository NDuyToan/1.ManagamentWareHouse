import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Brand } from './../../../shared/model/brand.class';
import { BrandService } from './../brand.service';

@Component({
  selector: 'app-brand-new',
  templateUrl: './brand-new.component.html',
  styleUrls: ['./brand-new.component.css']
})
export class BrandNewComponent implements OnInit {
  private newBrand: Brand;
  constructor(
    private fb: FormBuilder,
    private brandService: BrandService,
  ) { }
  frNewBrand = this.fb.group({
    brandName : ['', Validators.required]
  })

  ngOnInit() {
  }
  onSubmit(){

    this.newBrand = this.frNewBrand.value;
   this.brandService.ceateNewBrand(this.newBrand).subscribe( ()=>this.goBack());
  }
  goBack(){
    window.history.back()
  }

}
