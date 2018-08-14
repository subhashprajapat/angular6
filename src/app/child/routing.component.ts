import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-routing',
    template: `
  <h2>User Data</h2>
  <p>{{name}}</p>
  `
})
export class RoutingComponent {
    name: any;
    sub: any;
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.sub = this.route.params.subscribe(param => this.name = param['name']);
    }

}