import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'company/list', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'company/list', component: CompanyListComponent },
    { path: 'company/edit/:id', component: CompanyEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
