import { Component, OnInit } from '@angular/core';

import { CustomerService } from './customer.service';
import { Customer } from './../../shared/model/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
  ) { }
  public customers: Customer[] = [];

  ngOnInit() {
    this.loadCustomers();
  }
  loadCustomers():void{
    this.customerService.getAllCustomers().subscribe( (data) => {this.customers = data})
  }
  deleteCustomer(customer: Customer){
    
  }

}
