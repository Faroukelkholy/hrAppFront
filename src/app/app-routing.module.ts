import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateNewsComponent} from './create-news/create-news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { BenefitComponent } from './benefit/benefit.component';
import { CreateBenefitComponent } from './create-benefit/create-benefit.component';


const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'benefits', component: BenefitComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'create-news', component: CreateNewsComponent },
{ path: 'create-benefit', component: CreateBenefitComponent },
{ path: 'create-employee', component: CreateEmployeeComponent },
{ path: 'employees',  component: EmployeeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
