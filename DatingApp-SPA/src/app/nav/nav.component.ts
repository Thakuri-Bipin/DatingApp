import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      // console.log('Successfully logged In');
      this.alertify.success('Logged In Successfully!!');
    },
    error => {
      // console.log('Failed to login');
      // console.log(error); // error from error Interceptor
      this.alertify.error(error);
    },() => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;

    return this.authService.loggedIn(); // expiry date is checked
  }

  logout() {
    localStorage.removeItem('token');
    // console.log('Logged Out');
    this.alertify.message('logged Out');
    this.router.navigate(['/home']);
  }

}
