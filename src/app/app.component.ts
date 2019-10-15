import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
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
  constructor(private router: Router, public userService: UserService, private cdr: ChangeDetectorRef, private _bottomSheet: MatBottomSheet) {

  }



  ngAfterViewChecked() {
    if (UserService.access_token) {
      this.loggedIn = true;
      this.cdr.detectChanges();
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}
