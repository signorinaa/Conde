import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Enroll2PageRoutingModule } from './enroll2-routing.module';

import { Enroll2Page } from './enroll2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Enroll2PageRoutingModule
  ],
  declarations: [Enroll2Page]
})
export class Enroll2PageModule {}
