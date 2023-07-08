import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { SchedulePage } from '../schedule/schedule.page';
import { SchedulePageModule } from '../schedule/schedule.module';
import { EnrollmentPageModule } from '../enrollment/enrollment.module';
import { FormsPageModule } from '../forms/forms.module';
import { AccountPageModule } from '../account/account.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {

      path: 'schedule',
      loadChildren: () => import('../schedule/schedule.module').then (m => SchedulePageModule)

    },{
      path: 'enrollment',
      loadChildren: () => import('../enrollment/enrollment.module').then (m => EnrollmentPageModule)

    },{
      path: 'forms',
      loadChildren: () => import('../forms/forms.module').then (m => FormsPageModule)
    },{
      path: 'account',
      loadChildren: () => import('../account/account.module').then (m => AccountPageModule)
    },
    {
      path: '',
      redirectTo: '/dashboard/schedule',
      pathMatch: 'full'
    }
    ]
  },{

    path:'',
    redirectTo: '/dashboard/schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
