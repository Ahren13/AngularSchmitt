import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  currentCustomer = null;
  message = '';
  wartungsvertragTrue = true;
  wartungsvertragFalse = false;
  build = 'Gebäude1';

  customerDetail = {
    location: '',
    contactPerson: '',
    contactPersonEmail: '',
    contactPersonMobile: '',
    maintenanceContract: false,
    maintenanceInterval: '',
    calendarWeek: '',
    building: [],
    exterMaintenanceBusiness: '',
    noteField: ''
  };
  

  
  
  


  constructor(private CustomerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }
              

  ngOnInit(): void {
    this.message = '';
    this.getCustomer(this.route.snapshot.paramMap.get('id'));
    
  }

  getCustomer(id) {
    this.CustomerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  yesButton(){
    this.customerDetail.maintenanceContract = this.wartungsvertragTrue;
    console.log(this.customerDetail.maintenanceContract);
    return true;
  }

  noButton(){
    this.currentCustomer.maintenanceContract = this.wartungsvertragFalse;
    console.log(this.currentCustomer.maintenanceContract);

  }

  /* updatePublished(status) {
    const data = {
      name: this.currentCustomer.name,
      emptySt: this.currentCustomer.emptySt      
    };

    this.CustomerService.update(this.currentCustomer.id, data)
      .subscribe(
        response => {
          
          console.log(response);
        },
        error => {
          console.log(error);
        });
  } */

  saveCustomerDetail(){
     
    const dataDetail = {
      location: this.customerDetail.location,
      contactPerson: this.customerDetail.contactPerson,
      contactPersonEmail: this.customerDetail.contactPersonEmail,
      contactPersonMobile: this.customerDetail.contactPersonMobile,
      maintenanceContract: this.customerDetail.maintenanceContract,
      maintenanceInterval: this.customerDetail.maintenanceInterval,
      calendarWeek: this.customerDetail.calendarWeek,
      building: this.customerDetail.building,
      exterMaintenanceBusiness: this.customerDetail.exterMaintenanceBusiness,
      noteField: this.customerDetail.noteField
    };

    this.CustomerService.createCustomersDetail(this.currentCustomer._id, dataDetail)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer() {
    this.CustomerService.update(this.currentCustomer._id, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Customer was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer() {
    this.CustomerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/costumers']);
        },
        error => {
          console.log(error);
        });
  }

  addBuilding(build){
    /* const i = this.currentCustomer.customerDetail.building.length
    baba = this.currentCustomer.customerDetail.building[i+1] */
    /* console.log(build); */
    this.customerDetail.building.push(build);
    console.log(this.customerDetail.building); 
    
  }


  
}
