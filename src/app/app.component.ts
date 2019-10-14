import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrApp';
  loggedIn = false;
  constructor(private router: Router, public loginService: LoginService, private cdr: ChangeDetectorRef, private _bottomSheet: MatBottomSheet) {
    // console.log('localStorage: ', localStorage);
    // console.log('window localStorage: ', window.localStorage);
    // console.log('router.url', this.router.url);
    // console.log('LoginService', this.loginService.getLoggedIn());
    // console.log('log:' ,this.router.getCurrentNavigation());
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked: ')
    if (this.loginService.getLoggedIn()) {
      this.loggedIn = this.loginService.getLoggedIn();
      this.cdr.detectChanges();
    }
  }

  ngOnChanges() {
    console.log('ngOnChanges: ');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}
