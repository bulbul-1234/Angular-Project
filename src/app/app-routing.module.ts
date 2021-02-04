import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPageComponent } from './form-page/form-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'formPage', component: FormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,FormPageComponent]
