import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import  { NgbModal }from '@ng-bootstrap/ng-bootstrap';

import { AuthServerProvider } from './../../core/auth/auth-jwt.service';
import { URL_BRANDS } from './../../app.const';
import { BrandService } from './brand.service';
import { Brand} from './../../shared/model/brand.class';
import { BrandDeleteComponent } from './brand-delete/brand-delete.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  //private urlBrand = 'http://localhost:8080/api/brands';
  public brands: Brand[] = [];
  public brand: Brand;

  constructor(
    private http: HttpClient,
    private authServerProvider: AuthServerProvider,
    private brandService: BrandService,
    private modalService: NgbModal,
  ) { }
  // private token:string = this.authServerProvider.getLocal();
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'Bearer ' + this.token
  //   })
  // };


  ngOnInit() {
    this.loadBrands();

    this.brandService.closed$.subscribe(res => {
      console.log(" Check close", res);
      if(res) {
        this.loadBrands();
      }
    })
  }
  loadBrands(): void {
     this.brandService.getAllBrands().subscribe( data =>{

       this.brands = data;

    })
    // this.http.get(this.urlBrand, this.httpOptions).subscribe( data => console.log(data))

  }
  trackByID( index: number, item: Brand): number {
    return item.id;
  }
  deleteBrand(brand: Brand):void{
    //this.modalService.open(BrandDeleteComponent);
    const modalRef = this.modalService.open(BrandDeleteComponent);
    modalRef.componentInstance.brand = brand;



    // modalRef.close(res =>{
    //   console.log("Check res close", res);
    // });

    // modalRef.componentInstance.= brand;
    //console.log(brand.id);
  }


}
