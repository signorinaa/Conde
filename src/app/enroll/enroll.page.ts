import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {

  showStrand: boolean= false;
  showSY:boolean = false;
  showSY2:boolean = false;

  selectYear: string = "";
  selectStrand: string|null = "";
  enterFname: string ="";
  enterLname: string ="";
  enterMI: string ="";
  enterLRN: string= "";
  
  constructor(
    private router: Router,
    private toastController: ToastController
    ) {}

  ngOnInit() {

  }
  
  limitInputLength(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 12) {
      input.value = input.value.slice(0, 12);
      this.enterLRN = input.value;
    }
  }

  goToEnroll2(){
    // this.router.navigateByUrl("enroll2");

    if (this.selectYear ===""||this.enterLRN.length !=12 || this.enterLRN === null || this.enterLRN ==="" || this.enterLname ==="" || this.enterFname === "" || this.enterMI ===""){

        this.presentToast();

    }else if (this.selectYear ==="Grade-11" && this.selectStrand ===""){
      this.presentToast();
    }else if (this.selectYear ==="Grade-12" && this.selectStrand ===""){
      this.presentToast();
    }
    
    else{

      this.router.navigate(['/enroll2', {
        
        fname:this.enterFname,
        lname:this.enterLname,
        mi:this.enterMI,
        lrn:this.enterLRN,
        grade:this.selectYear,
        strand:this.selectStrand
      
      }]);
    }


  }


  changeStrand(){

    if ( this.selectYear === 'Grade-11' || this.selectYear === 'Grade-12' ){
      this.showStrand = true;
      this.showSY = true;
    }else{
      this.showStrand = false;
      this.showSY = false;
      this.showSY2 = true;
    }

  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please correctly fill all the information needed',
      duration: 2000, // Duration in milliseconds
      position: 'top', // Position of the toast on the screen
      icon: "alert-circle",
      cssClass: "my-custom-toast"
    });
    toast.present();
  }


}
