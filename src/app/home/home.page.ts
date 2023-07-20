import { Component, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showPassword = false;
  
  constructor(private router: Router) {}

  goToHome(){

    this.router.navigate(['/dashboard/tab1'])
  }

  goToForgot(){

    this.router.navigate(['/forgot'])
  }
  goToRegister(){

    this.router.navigate(['/create'])
  }


}
