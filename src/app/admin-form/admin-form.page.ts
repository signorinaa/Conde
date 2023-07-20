import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.page.html',
  styleUrls: ['./admin-form.page.scss'],
})
export class AdminFormPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToMain(){
    this.route.navigateByUrl("/admin-dashboard")
  }

}
