import { AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';
 
export function passwordMatch
(control: AbstractControl):{[key: string]: boolean}  {
     
    //Grab pwd and confirmPwd using control.get
    const pwd = control.get('pwd');
     const confirmPwd = control.get('confirmPwd');
       
    // If FormControl objects don't exist, return null
    if (!pwd || !confirmPwd) return null;
     
    //If they are indeed equal, return null
     if (pwd.value === confirmPwd.value) {
      return null;
    }
   //Else return false
   return {
      mismatch: true };
   }
 
   
//PasswordMatchDirective  
@Directive({
  selector: '',
  providers: [
    
  ]
})
 
export class PasswordMatchDirective {
}