import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEnrollPageRoutingModule } from './admin-enroll-routing.module';

import { AdminEnrollPage } from './admin-enroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEnrollPageRoutingModule
  ],
  declarations: [AdminEnrollPage]
})
export class AdminEnrollPageModule {}
