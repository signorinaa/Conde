import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enroll2',
  templateUrl: './enroll2.page.html',
  styleUrls: ['./enroll2.page.scss'],
})
export class Enroll2Page implements OnInit {

  showStrand:boolean=true;
  showSub_grade: boolean=false;
  showSub_ABM11: boolean=false;
  showSub_ABM12: boolean=false;
  showSub_HUMMS11: boolean=false;
  showSub_HUMMS12: boolean=false;
  showSub_STEM11: boolean=false;
  showSub_STEM12: boolean=false;
  showSub_ICT11: boolean=false;
  showSub_ICT12: boolean=false;

  selectYear: string|null = "";
  selectStrand: string|null = "";
  enterFname: string|null="";
  enterLname: string|null ="";
  enterMI: string|null ="";
  enterLRN: any;

  selectSection:string|null ="";

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private router : Router
    ) {}

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Please select your section',
        duration: 2000, // Duration in milliseconds
        position: 'top', // Position of the toast on the screen
        icon: "alert-circle",
        cssClass: "my-custom-toast"
      });
      toast.present();

    }
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Confirm Enrollment?',
        cssClass: "confirmAlert",
        buttons: [{
              text: 'Confirm',
              handler: () =>{

                this.goToMessage();
              }
              
        },{
              text: 'Cancel',
        }]
      });
      await alert.present();
    } 

    goToPrevious(){
      this.router.navigateByUrl('/enroll');
    }

    goToMessage(){

        if(this.selectSection ===""){
          
          this.presentToast();

        }else{
          this.router.navigateByUrl('/message');
        }
      
    }
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
    this.selectYear=(params.get('grade'));
    this.selectStrand=(params.get('strand'));
    this.enterFname=(params.get('fname'));
    this.enterLname=(params.get('lname'));
    this.enterMI=(params.get('mi'));
    this.enterLRN=params.get('lrn');

    });



    if(this.selectStrand == ""){
      this.showStrand = false;
    }


    // Show subject if grade 7-10

    if (this.selectYear !== "Grade-11" && this.selectYear !== "Grade-12"){

          this.showSub_grade = true;
          this.showSub_ABM11 = false;
          this.showSub_ABM12= false;
          this.showSub_HUMMS11 = false;
          this.showSub_HUMMS12 = false;
          this.showSub_STEM11=false;
          this.showSub_STEM12=false;
          this.showSub_ICT11=false;
          this.showSub_ICT12=false;
        

    }else if (this.selectYear === "Grade-11" && this.selectStrand ==="ABM"){
            this.showSub_grade = false;
            this.showSub_ABM11 = true;
            this.showSub_ABM12= false;
            this.showSub_HUMMS11 = false;
            this.showSub_HUMMS12 = false;
            this.showSub_STEM11=false;
            this.showSub_STEM12=false;
            this.showSub_ICT11=false;
            this.showSub_ICT12=false;

    }else if (this.selectYear === "Grade-12" && this.selectStrand ==="ABM"){
            this.showSub_grade = false;
            this.showSub_ABM11 = false;
            this.showSub_ABM12= true;
            this.showSub_HUMMS11 = false;
            this.showSub_HUMMS12 = false;
            this.showSub_STEM11=false;
            this.showSub_STEM12=false;
            this.showSub_ICT11=false;
            this.showSub_ICT12=false;

    }else if (this.selectYear === "Grade-11" && this.selectStrand ==="HUMMS"){
            this.showSub_grade = false;
            this.showSub_ABM11 = false;
            this.showSub_ABM12= false;
            this.showSub_HUMMS11 = true;
            this.showSub_HUMMS12 = false;
            this.showSub_STEM11=false;
            this.showSub_STEM12=false;
            this.showSub_ICT11=false;
            this.showSub_ICT12=false;

    }else if (this.selectYear === "Grade-12" && this.selectStrand ==="HUMMS"){

            this.showSub_grade = false;
            this.showSub_ABM11 = false;
            this.showSub_ABM12= false;
            this.showSub_HUMMS11 = false;
            this.showSub_HUMMS12 = true;
            this.showSub_STEM11=false;
            this.showSub_STEM12=false;
            this.showSub_ICT11=false;
            this.showSub_ICT12=false;

    }else if (this.selectYear === "Grade-11" && this.selectStrand ==="STEM"){

      this.showSub_grade = false;
      this.showSub_ABM11 = false;
      this.showSub_ABM12= false;
      this.showSub_HUMMS11 = false;
      this.showSub_HUMMS12 = false;
      this.showSub_STEM11=true;
      this.showSub_STEM12=false;
      this.showSub_ICT11=false;
      this.showSub_ICT12=false;

}else if (this.selectYear === "Grade-12" && this.selectStrand ==="STEM"){

      this.showSub_grade = false;
      this.showSub_ABM11 = false;
      this.showSub_ABM12= false;
      this.showSub_HUMMS11 = false;
      this.showSub_HUMMS12 = false;
      this.showSub_STEM11=false;
      this.showSub_STEM12=true;
      this.showSub_ICT11=false;
      this.showSub_ICT12=false;

}else if (this.selectYear === "Grade-11" && this.selectStrand ==="ICT"){

  this.showSub_grade = false;
  this.showSub_ABM11 = false;
  this.showSub_ABM12= false;
  this.showSub_HUMMS11 = false;
  this.showSub_HUMMS12 = false;
  this.showSub_STEM11=false;
  this.showSub_STEM12=false;
  this.showSub_ICT11=true;
  this.showSub_ICT12=false;

}else if (this.selectYear === "Grade-12" && this.selectStrand ==="ICT"){

  this.showSub_grade = false;
  this.showSub_ABM11 = false;
  this.showSub_ABM12= false;
  this.showSub_HUMMS11 = false;
  this.showSub_HUMMS12 = false;
  this.showSub_STEM11=false;
  this.showSub_STEM12=false;
  this.showSub_ICT11=false;
  this.showSub_ICT12=true;

}
    }
  }



