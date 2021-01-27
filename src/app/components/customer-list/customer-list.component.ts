import { Component, OnInit } from '@angular/core';
import { Customer } from '../../services/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  customers: any;
  currentCustomer = null;
  currentCustomerDetail = null;
  currentIndex = -1;
  currentIndex1 =-1;
  name = '';
  currentCustomerId = null;
  customerDetails = null;
  

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
    
    
  }
  retrieveCustomers() {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveDetails(){
    
  }

  setActiveCustomerdetail(customerdet, index) {
    this.currentCustomerDetail = customerdet;
    this.currentIndex = index;
    console.log("currentCustomerDetail" + this.currentCustomerDetail);
  }

  

  refreshList() {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setActiveCustomer(customer, index) {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  retriveDetail(customer, index){
    
    this.currentCustomer = customer;
    this.currentIndex = index;
    this.customerService.getCustomerDetail(this.currentCustomer._id)
    .subscribe(
      data => {
        this.customerDetails = data;
        console.log(data);
        //console.log("TEST: " + this.customerDetails.customerdet[0].location)
        

      },
      error => {
        console.log(error);
      });
  }

  /* removeAllCustomers() {
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  } */

  deleteCustomer() {
    console.log(this.currentCustomer);
    this.customerService.delete(this.currentCustomer._id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
    console.log(this.name);
    this.customerService.findByName(this.name)
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retriveDetailCustomer(customer, index){
    
    console.log('ID: ' +customer);

    this.currentCustomerDetail = customer;
    this.currentIndex = index;
    this.customerService.getSingleCustomerDetail(this.currentCustomer._id)
    .subscribe(
      data => {
        this.customerDetails = data;
        console.log(data);
        //console.log("TEST: " + this.customerDetails.customerdet[0].location)
        

      },
      error => {
        console.log(error);
      });
  }

  changeCurrentCustomerDetails(customerdet, i){
    this.currentCustomerDetail = customerdet;
    this.currentIndex1 = i;
  }

}


