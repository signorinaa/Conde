import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.page.html',
  styleUrls: ['./submitform.page.scss'],
})
export class SubmitformPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){

    this.router.navigateByUrl("/dashboard/tab1");
  }

}
