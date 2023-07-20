import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-enroll',
  templateUrl: './admin-enroll.page.html',
  styleUrls: ['./admin-enroll.page.scss'],
})
export class AdminEnrollPage implements OnInit {

  previous:boolean= true;

  Table1:boolean= false;
  Table2:boolean =false;
  isClicked1: boolean = false;
  isClicked2: boolean = false;
  
  buttonRow: boolean = false;
  studentRow: boolean = true;

  back: boolean = false;

  shs11table1: boolean = false;
  shs11table2: boolean = false;
  buttonRowShs11: boolean = false;

  shs12table1: boolean = false;
  shs12table2: boolean = false;
  buttonRowShs12: boolean = false;





  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPrevious(){

    this.router.navigateByUrl("/admin-dashboard")
  }

  studentList:any [] = [
    { studentName: 'Aquino, Angela S.'},
    { studentName: 'Chua, Beatriz I.'},
    { studentName: 'Cruz, Sofia L..'},
    { studentName: 'Dela Cruz, Rafaela T..'},
    { studentName: 'Garcia, Ethan L.'},
    { studentName: 'Gonzales, Miguel J..'},
    { studentName: 'Hernandez, Andres P.'},
    { studentName: 'Lim, Isabella D.'},
    { studentName: 'Miranda, Valentina H.'},
    { studentName: 'Ocampo, Martina F.'},
    { studentName: 'Pascual, Camila N.'},
    { studentName: 'Ramos, Gabriel C.'},
    { studentName: 'Reyes, Carlos O.'},
    { studentName: 'Reyes, Juan M.'},
    { studentName: 'Reyes, Victorio A.'},
    { studentName: 'Santos, Maria R.'},
    { studentName: 'Sison, Margarita L.'},
    { studentName: 'Tan, Emmanuel B.'},

  ]

  studentList2:any [] = [
    { studentName: 'Aguilar, Andres J.'},
    { studentName: 'Bautista, Sofia M.'},
    { studentName: 'Castro, Carlos N.'},
    { studentName: 'Del Rosario, Isabella L.'},
    { studentName: 'Espinoza, Rafael G.'},
    { studentName: 'Fernandez, Camila A.'},
    { studentName: 'Garcia, Miguel V.'},
    { studentName: 'Hernandez, Olivia P.'},
    { studentName: 'Ibanez, Leonardo K.'},
    { studentName: 'Jimenez, Lucia F.'},
    { studentName: 'Kim, Daniel C.'},
    { studentName: 'Lopez, Elena R.'},
    { studentName: 'Martinez, Antonio E.'},
    { studentName: 'Navarro, Emma T.'},
    { studentName: 'Ortega, Gabriel H.'},
    { studentName: 'Perez, Beatriz Q.'},
    { studentName: 'Quintero, Matias S.'},
    { studentName: 'Reyes, Isabelle B.'},

  ]


  goToBack(){
    this.studentRow = true;
    this.Table1 = false;
    this.Table2 = false;
    this.isClicked1 = false;
    this.isClicked2 = false;
    this.buttonRow = false;
    this.shs11table1 = false;
    this.shs11table2 = false;
    this.buttonRowShs11 = false;
    this.shs12table1 = false;
    this.shs12table2 = false;
    this.buttonRowShs12 = false;
    this.back = false;
    this.previous = true;

  }
  showTable1(){

    this.Table1 = true;
    this.Table2 = false;
    this.isClicked1 = true;
    this.isClicked2 = false;
  }

  showTable2(){

    this.Table2 = true;
    this.Table1 = false;
    this.isClicked1 = false;
    this.isClicked2 = true;
  }

  showStudent(){
    this.buttonRow = true;
    this.Table1 = true;
    this.isClicked1 = true;
    this.back = true;
    this.studentRow = false;
    this.previous = false;
  
  }

// After clicking track
  showStudent_SHS(){
    this.buttonRowShs11= true;
    this.shs11table1 = true;
    this.isClicked1 = true;
    this.back = true;
    this.studentRow = false;
    this.previous = false;
  }

  showTable1_shs11(){
    this.shs11table1 = true;
    this.shs11table2 = false;
    this.isClicked1 = true;
    this.isClicked2 = false;

  }

  showTable2_shs11(){
    this.shs11table1 = false;
    this.shs11table2 = true;
    this.isClicked1 = false;
    this.isClicked2 = true;
  }

  // After clicking track
  showStudent_SHS12(){
    this.buttonRowShs12= true;
    this.shs12table1 = true;
    this.isClicked1 = true;
    this.back = true;
    this.previous = false;
    this.studentRow = false;
  }

  showTable1_shs12(){
    this.shs12table1 = true;
    this.shs12table2 = false; 
    this.isClicked1 = true;
    this.isClicked2 = false;

  }

  showTable2_shs12(){
    this.shs12table1 = false;
    this.shs12table2 = true;
    this.isClicked1 = false;
    this.isClicked2 = true;
  }
}
