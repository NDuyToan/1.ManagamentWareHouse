import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Brand } from 'src/app/shared/model/brand.class';
import { BrandService } from './../brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {

  public brand: Brand;
  constructor(
    public activeModal: NgbActiveModal,
    private brandService: BrandService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  confirmDelete(id: number){
    this.brandService.deleteBrand(id).subscribe((data)=>{
     
      this.brandService.closed(true);
      this.activeModal.close();

    });
  }
}
