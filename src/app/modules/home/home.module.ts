import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from '@shared/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ConsultationComponent } from './home/consultation/consultation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
