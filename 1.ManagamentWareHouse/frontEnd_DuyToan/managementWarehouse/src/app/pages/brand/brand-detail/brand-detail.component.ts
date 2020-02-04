import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from './../../../shared/model/brand.class';
import { BrandService } from './../brand.service';
import { PreviousUrlService } from './../../../core/previous-url.service';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css']
})
export class BrandDetailComponent implements OnInit {

  public brand: Brand = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private previousUrl: PreviousUrlService,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
  // this.brandService.getBrand(id).subscribe( item => console.log(item));
   //console.log( this.brandService.getBrandByID(id))
   this.brandService.getBrandByID(id).subscribe( brand => this.brand = brand )
  }
  onBack(){
    //console.log(this.previousUrl.getPreviousUrl());
    window.history.back();
  }

}
