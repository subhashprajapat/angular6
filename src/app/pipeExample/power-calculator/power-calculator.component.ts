import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exponentialStrength',
  templateUrl: './power-calculator.component.html',
  styleUrls: ['./power-calculator.component.css']
})
export class PowerCalculatorComponent implements OnInit {

  powerCal = 5;
  factor = 2;
  constructor() { }

  ngOnInit() {
  }

}
