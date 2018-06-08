import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';

const routes: Routes =[
{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: 'child', component: ChildComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
