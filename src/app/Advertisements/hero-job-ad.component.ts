import { Component, OnInit, Input } from '@angular/core';
import {AdComponent} from './ad.component';

@Component({
  template: `
    <div class="job-ad">
    <h3>Featured Job Profile</h3>
      <h4>{{data.headline}}</h4>

      {{data.body}}<br>
      <strong>Hire this job today!</strong>
    </div>
    `,
    styleUrls: ['./advertisements.component.css']
})
export class HeroJobAdComponent implements AdComponent {

  @Input() data:any;
  constructor() { }

  ngOnInit() {
  }

}
