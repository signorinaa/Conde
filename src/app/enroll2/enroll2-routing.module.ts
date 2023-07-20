import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Enroll2Page } from './enroll2.page';

const routes: Routes = [
  {
    path: '',
    component: Enroll2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Enroll2PageRoutingModule {}
