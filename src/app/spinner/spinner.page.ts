import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.page.html',
  styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {

  }

  goToEnrollment(){

    this.router.navigateByUrl("enroll");
  }
  goToLogin(){

    this.router.navigateByUrl("home");
  }

  goToAdmin(){
    this.router.navigateByUrl("admin");
  }

}
