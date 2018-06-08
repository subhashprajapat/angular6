import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
     userData : Array<any>=[];

     getUserData(data:any){
      this.userData.push(data);
  }  
  
  constructor() { 
   }
}
