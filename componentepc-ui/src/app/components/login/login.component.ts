import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./bootstrap.min.css', 
             './login.component.css']
})
 
export class LoginComponent implements OnInit {

    username: string;
    password : string;
    errorMessage = 'Invalid Credentials';
    successMessage: string;
    invalidLogin = false;
    loginSuccess = false;

    constructor(
      private router: Router,
      private authenticationService: AuthenticationService) {   }

    ngOnInit() {
    }

    handleLogin() {
      this.authenticationService.authenticationService(this.username, this.password).subscribe((result) => {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/hello-world']);
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
    }
}
