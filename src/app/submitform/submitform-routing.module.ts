import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitformPage } from './submitform.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitformPageRoutingModule {}
