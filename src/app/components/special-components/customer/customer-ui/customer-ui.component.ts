import { Customer } from './../../../../models/customer.module';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.scss']
})
export class CustomerUiComponent implements OnInit {
  allCompanies: Customer[];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOneCustomer().subscribe(customer => {
      console.log(customer);
    });
  }

}
