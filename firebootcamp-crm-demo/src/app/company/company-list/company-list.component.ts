import { CompanyService } from './../company.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
      this.companyService.getCompanies()
        .subscribe(companies => this.companies = companies);
  }

   deleteCompany(companyId: number) {
      this.companyService.deleteCompany(companyId)
        .subscribe(() => this.getCompanies());
  }

}
