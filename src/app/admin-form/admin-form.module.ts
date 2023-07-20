import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFormPageRoutingModule } from './admin-form-routing.module';

import { AdminFormPage } from './admin-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminFormPageRoutingModule
  ],
  declarations: [AdminFormPage]
})
export class AdminFormPageModule {}
