import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {  
  message: string ;
  users = [
    { name: 'Subhash' },
    { name: 'Hariram' },
    { name: 'Saurabh' }
  ];
  constructor(private data: DataService) { }  
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  newMessage(){
    this.data.changeMessage('test data service');
  }
}
