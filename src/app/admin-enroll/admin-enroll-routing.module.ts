import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEnrollPage } from './admin-enroll.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEnrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEnrollPageRoutingModule {}
