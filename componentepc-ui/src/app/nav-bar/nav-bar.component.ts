import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLoginStatus: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.userLoginStatus = this.authenticationService.isUserLoggedIn();
    console.log('The status from app ' + this.userLoginStatus);
  }

  handleLogout() {
    console.log("handleLogout called");
    this.authenticationService.logout();
  }
}
