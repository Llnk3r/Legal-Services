import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: Page404Component,
    title: 'Page not found'
  },
];


@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Page404Module { }
