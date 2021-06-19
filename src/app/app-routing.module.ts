import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { DashboardnComponent } from './pages/dashboardn/dashboardn.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisternComponent } from './auth/registern/registern.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundnComponent } from './pages/nopagefoundn/nopagefoundn.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes =[

 {path:'', component: PagesComponent,
children:[
  {path: 'dashboardn', component: DashboardnComponent}, 
  {path: 'progress', component: ProgressComponent},
  {path: 'grafica1', component: Grafica1Component},
  {path:'', redirectTo: '/dashboardn', pathMatch: 'full'},
]},


 {path: 'login', component: LoginComponent},
 {path: 'registern', component: RegisternComponent},
 



 {path: '**', component: NopagefoundnComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
