import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToEnroll(){
    this.route.navigateByUrl("admin-enroll");
  }

  goToLogout(){
    this.route.navigateByUrl("spinner");
  }
  goToForm(){
    this.route.navigateByUrl("admin-form");
  }
}
