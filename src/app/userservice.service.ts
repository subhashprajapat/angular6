import { Injectable } from '@angular/core';

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
