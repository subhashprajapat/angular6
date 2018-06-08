import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {  
  
    private messageSource= new BehaviorSubject("default massage");
    currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}


