import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from './../company';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Observable<Company[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = this.companyService.getCompanies()
    // .subscribe(companies => this.companies = companies);
  }
  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

}
