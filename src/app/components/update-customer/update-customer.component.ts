import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  currentCustomer = null;

  constructor(private CustomerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) {
    
   }

  ngOnInit(): void {
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
  
}
