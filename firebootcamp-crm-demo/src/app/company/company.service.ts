import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api/';

  constructor(
    private http: Http
  ) { }

  getCompanies() {
    return this.http.get(this.API_BASE + `company`)
      .map(companies => companies.json())
      .catch(this.errorHandler);
  }

  deleteCompany(companyId: number) {
    return this.http.delete(this.API_BASE + `company/${companyId}`)
      .catch(this.errorHandler);
  }

  errorHandler(error) {
    console.log('error to handle', error);
    return <ErrorObservable>Observable.throw(error);
  }

}
