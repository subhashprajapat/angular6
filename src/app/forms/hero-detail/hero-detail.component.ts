import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states } from '../data-model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  states = states;
  heroForm = new FormGroup({
    name: new FormControl()
  }
  );
  heroFormBuilder: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroFormBuilder = this.fb.group({
      firstName: ['', Validators.required],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }

  ngOnInit() {
    // Create simple observable that emits three values
    const myObservable = of(1, 2, 3);

    // Execute with the observer object
    myObservable.subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
    //rx-library in Map operator
    const powerValue = map((val: number) => val * val);
    const powerNums = powerValue(myObservable);
    // Subscribe to get values
    powerNums.subscribe(x => console.log('rxJS in map operator', x));

    //rx-library in Filter/pipe operator
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      );
    // Subscribe to get values
    squareOdd.subscribe(x => console.log('rxJS in Filter/pipe operator',x));
  }

  //Creating a Basic Observable

  private data: Observable<string>;
  private fruits: Array<string> = [];
  private anyErrors: boolean;
  private finished: boolean;


  Start() {
    this.data = new Observable
      (
      observer => {
        setTimeout(() => {
          observer.next('Apple');
        }, 1000);

        setTimeout(() => {
          observer.next('mango');
        }, 2000);
        setTimeout(() => {
          observer.next('Orannge');
        }, 3000);
        setTimeout(() => {
          observer.error(new Error('error occured'));
        }, 4000);
        setTimeout(() => {
          observer.complete();
        }, 4000);

      }
      );
    let subscription = this.data.subscribe(
      fruit => this.fruits.push(fruit),
      error => this.anyErrors = true,
      () => this.finished = true
    );
  }

}
