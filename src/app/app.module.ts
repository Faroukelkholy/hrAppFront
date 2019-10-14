import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BenefitComponent } from './benefit/benefit.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule, MatCardModule, MatGridListModule, MatButtonModule,
MatToolbarModule, MatIconModule, MatDialogModule, MatBottomSheetModule, MatListModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { CreateBenefitComponent } from './create-benefit/create-benefit.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    BenefitComponent,
    EmployeeComponent,
    HomeComponent,
    ErrorComponent,
    CreateNewsComponent,
    CreateBenefitComponent,
    CreateEmployeeComponent,
    BottomSheetComponent,
    BottomSheetComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule
  ],
  entryComponents: [ErrorComponent, BottomSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
