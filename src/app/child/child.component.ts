import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-child',
  template: `
  {{message}}
  <button text="button" (click)="newMessage()">newMessage</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {  
  message: string ;
  constructor(private data: DataService) { }  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMessage(){
    this.data.changeMessage('test data service');
  }
}
