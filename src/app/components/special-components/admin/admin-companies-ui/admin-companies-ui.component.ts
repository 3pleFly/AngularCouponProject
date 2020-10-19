import { ResponseDto } from './../../../../models/responseDto.module ';
import { DataService } from './../../../../services/data.service';
import { Company } from './../../../../models/company.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-companies-ui',
  templateUrl: './admin-companies-ui.component.html',
  styleUrls: ['./admin-companies-ui.component.scss']
})
export class AdminCompaniesUiComponent implements OnInit {
allCompanies: Company[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllCompanies().subscribe((response: ResponseDto<Company[]>) => {
      this.allCompanies = response.t;
      for (let index = 0; index < 25; index++) {
       this.allCompanies.push(response.t[0]);

      }
    }, (error) => {
      console.log(error);
    });
  }

}
