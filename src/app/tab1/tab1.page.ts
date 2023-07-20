import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

    hideMission: boolean =false;
    hideVision:boolean = false;
    hideCore: boolean = false;



  constructor() { }

  ngOnInit() {
  }

  showMission(){

    this.hideMission = true;
    this.hideVision = false;
    this.hideCore = false;

  }

  showVision(){
    this.hideMission = false;
    this.hideVision = true;
    this.hideCore = false;
  }

  showCore(){
    this.hideMission = false;
    this.hideVision = false;
    this.hideCore = true;
  }

  

}
