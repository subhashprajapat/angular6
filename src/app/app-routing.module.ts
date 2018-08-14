import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { AdViewComponent } from './Advertisements/advertisements.component';
import { PowerCalculatorComponent } from './pipeExample/power-calculator/power-calculator.component';
import { FormsExampleComponent } from './forms/forms-example/forms-example.component';
import { RoutingComponent } from './child/routing.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'child', children: [
      { path: 'Routing', component: ChildComponent , children:[
        {path:'detail/:name', component: RoutingComponent}
      ]}
    ]
  },
  { path: 'ad', component: AdViewComponent },
  { path: 'power-calculator', component: PowerCalculatorComponent },
  { path: 'forms-example', component: FormsExampleComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
