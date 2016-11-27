import { Company } from './company';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class CompanyService {
  API_BASE_URL = 'http://firebootcamp-crm-api.azurewebsites.net/api/';

  constructor(private http: Http) { }

  getCompanies() {
    return this.http.get(this.API_BASE_URL + `company`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  getCompany(companyId: number): any {
    return this.http.get(this.API_BASE_URL + `company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }
  deleteCompany(companyId: number): any {
    return this.http.delete(this.API_BASE_URL + `company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  saveCompany(company: Company) {

    const headers = new Headers({ 'content-type' : 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.API_BASE_URL + `company`, JSON.stringify(company), options)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  private errorHandler(error) {
    console.log('custom error handler:', error);
    return Observable.throw(error);
  }

}
