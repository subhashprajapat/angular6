import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyDashComponent } from './my-dash/my-dash.component';
import { DemoMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './core/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyTableComponent } from './my-table/my-table.component';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { FirstCharacterUpperCase, IsemptyPipe, RemoveSpecialCharPipe } from './pipes/firstcharcateruppercase';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { HttpModule } from '@angular/http';
import { HighlightDirective } from './Directive/highlight.directive';
import { AdViewComponent } from './Advertisements/advertisements.component';
import { HeroProfileComponent } from './Advertisements/hero-profile.component';
import { HeroJobAdComponent } from './Advertisements/hero-job-ad.component';
import { AdDirective } from './Directive/ad.directive';
import { AdService } from './service/ad.service';
import { AdBannerComponent } from './Advertisements/ad-banner.component';
import { PowerCalculatorComponent } from './pipeExample/power-calculator/power-calculator.component';
import { FormsExampleComponent } from './forms/forms-example/forms-example.component';
import { HeroDetailComponent } from './forms/hero-detail/hero-detail.component';
import { RoutingComponent } from './child/routing.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,        
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    DemoMaterialModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    MyDashComponent,
    MyNavComponent,
    MyTableComponent,
    ChildComponent,
    AdViewComponent,
    FirstCharacterUpperCase, IsemptyPipe, RemoveSpecialCharPipe,
    ExponentialStrengthPipe, PowerCalculatorComponent,FormsExampleComponent,HeroDetailComponent,RoutingComponent,
    HighlightDirective,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective,
    AdBannerComponent
  ], 
  exports: [],
  providers: [DataService, AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


