import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToSubmit(){

      this.router.navigateByUrl('/submitform');
  }

}
