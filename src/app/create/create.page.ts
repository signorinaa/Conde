import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
  }

  
  goToHome(){

    this.router.navigate(['/home'])
  }


  // goToHome(){

  //   this.router.navigate(['/home'])
  // }

}
