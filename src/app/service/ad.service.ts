import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from '../Advertisements/hero-job-ad.component';
import { HeroProfileComponent } from '../Advertisements/hero-profile.component';
import { AdItem } from '../Advertisements/ad-item';

@Injectable()
export class AdService {

  getAds() {
    return [
    new AdItem(HeroProfileComponent, { name: 'Nokia', bio: 'launch New phone' }),
    new AdItem(HeroJobAdComponent,   { headline: 'Hiring for', body: 'send your resume' }),
    new AdItem(HeroProfileComponent, { name: 'One Plus', bio: 'launch 6 Plus phone' }),
    new AdItem(HeroJobAdComponent,   { headline: 'Oppening in', body: 'Angular 6' }),
    new AdItem(HeroProfileComponent, { name: 'Hiring for', bio: 'send your resume' })
    ]
  }
  constructor() { }
}
