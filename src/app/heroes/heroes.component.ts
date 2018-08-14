import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { DataService } from '../data.service';
import { FirstCharacterUpperCase ,IsemptyPipe} from '../pipes/firstcharcateruppercase';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // template:`
  // {{message}}
  // <button text="button" (click)="newMessage()">newMessage</button>
  // `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  DataRecord:Array<any>=[];
  message: string;
  
  constructor(private UserserviceService: UserserviceService, private dataService: DataService){
    this.DataRecord = this.UserserviceService.userData;
    console.log('DataRecord',this.DataRecord);
  }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(){
    this.dataService.changeMessage("Hello Every One");
  }

}
