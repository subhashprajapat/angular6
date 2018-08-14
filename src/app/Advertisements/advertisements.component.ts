import { Component, OnInit } from '@angular/core';
import {AdService} from '../service/ad.service';
import {AdItem} from './ad-item';

@Component({
  selector: 'app-ad-view',
  template: `
  <div>
  <app-ad-banner [ads]="ads"></app-ad-banner>
  </div>
  `,
  styleUrls: ['./advertisements.component.css']
})
export class AdViewComponent implements OnInit {

  ads:AdItem[];

  constructor(private adService:AdService) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}