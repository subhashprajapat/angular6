import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../formClass';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})


export class FormsExampleComponent implements OnInit {

  values='';
  onKey(value:string){
    this.values = value ;
  };
  value='';
  heroes=['subhash'];
  update(value:string){
     this.value = value;
     this.heroes.push(value);
    };

    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
    model= new Hero(20,'subhash prajapat',this.powers[0],'angular');
    submitted = false;
    onSubmit(){this.submitted= true;}
    get diagnostic(){return JSON.stringify(this.model);}
  constructor() { }

  ngOnInit() {
  }

}
