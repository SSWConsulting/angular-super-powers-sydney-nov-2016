import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from './../company';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company = <Company>{};
  companyId = this.activatedRoute.snapshot.params['id'];
  isNewCompany = this.companyId === 'new' ? true : false;
 

  constructor(
     private companyService: CompanyService,
     private router: Router,
     private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {
      if (!this.isNewCompany) {
        this.getCompany();
      };
  }

  getCompany() {
      this.companyService.getCompany(this.companyId)
        .subscribe( company => this.company = company );
  }
  
  saveCompany() {
      this.companyService.saveCompany(this.company)
        .subscribe(() => this.router.navigateByUrl('/company.list'));
  }
}
