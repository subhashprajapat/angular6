import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import {Http,Headers} from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  
})
export class DashboardComponent implements AfterViewInit  {

  parentMessage = 'message from parent';
  @ViewChild(ChildComponent) child;
  message:string;
  reciveMessage($event){
      this.message = $event;
  }
  ngAfterViewInit(){
    // this.message= this.child.message;
  }
     title = 'Customer Details';
     data:any={}; 
  empForm: FormGroup;
  states = ['CA', 'MD', 'OH', 'VA'];
  heroesUrl = 'http://localhost:3000/api';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  constructor(private  UserserviceService: UserserviceService,private dataService: DataService,private router: Router, private fb: FormBuilder, private http:Http) {
    this.createForm();
   }
   createForm() {
    this.empForm = this.fb.group({
      fname: '',
      lname: '',
      address: '',
      city: '',
      state: '',
      phone: '',
      gender: '',
      terms:true
    });
  }
  onSubmit(){    
// var req={
//   fname: 's',
//   lname: 's',
//   address: 's',
//   city: 's',
//   state: 's',
//   phone: 's',
//   gender: 's',
//   terms:true
// }
    let url = `${this.heroesUrl}/createuser`;
    this.http.post(url,this.objectToParams(this.empForm.value),{headers: this.headers}).subscribe(res => console.log(res.json()));
    this.UserserviceService.getUserData(this.empForm.value); 
    this.router.navigate(['heroes']); // ON SUCCESS
    }
  
  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }
  //objectToParams(params)

/**
 * Converts an object to a parametrised string.
 * @param object
 * @returns {string}
 */
 objectToParams(object): string {
  console.log("object", object);
  return Object.keys(object).map((key) => (typeof (object[key]) === "object") ?
      this.subObjectToParams(encodeURIComponent(key), object[key]) :
      `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
  ).join('&');
}

/**
* Converts a sub-object to a parametrised string.
* @param object
* @returns {string}
*/
 subObjectToParams(key, object): string {
  return Object.keys(object).map((childKey) => (typeof (object[childKey]) === "object") ?
      this.subObjectToParams(`${key}[${encodeURIComponent(childKey)}]`, object[childKey]) :
      `${key}[${encodeURIComponent(childKey)}]=${encodeURIComponent(object[childKey])}`
  ).join('&');
}
}
