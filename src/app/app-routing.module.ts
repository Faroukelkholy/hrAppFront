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


const routes: Routes = [{ path: '', redirectTo: 'app/login', pathMatch: 'full' },
{ path: 'app/login', component: LoginComponent },
{ path: 'app/home', component: HomeComponent },
{ path: 'app/benefits', component: BenefitComponent },
{ path: 'app/profile', component: ProfileComponent },
{ path: 'app/create-news', component: CreateNewsComponent },
{ path: 'app/create-benefit', component: CreateBenefitComponent },
{ path: 'app/create-employee', component: CreateEmployeeComponent },
{ path: 'app/employees',  component: EmployeeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
