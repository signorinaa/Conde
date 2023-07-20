import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitformPageRoutingModule } from './submitform-routing.module';

import { SubmitformPage } from './submitform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitformPageRoutingModule
  ],
  declarations: [SubmitformPage]
})
export class SubmitformPageModule {}
