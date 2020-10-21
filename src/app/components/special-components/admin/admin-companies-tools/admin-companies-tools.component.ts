import { AdminService } from './../../../../services/method/admin.service';
import { FormBuilder } from '@angular/forms';
import { Company } from './../../../../models/company.module';
import { DataService } from 'src/app/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-companies-tools',
  templateUrl: './admin-companies-tools.component.html',
  styleUrls: ['./admin-companies-tools.component.scss'],
})
export class AdminCompaniesToolsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
