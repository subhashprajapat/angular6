import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({ name: 'firstcharcateruppercase' })
export class FirstCharacterUpperCase implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) {
            return value;
        }
        return value.replace(/\w\S*/g, function (str) {
            return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
        });
    }
}
@Pipe({ name: 'isempty'})
export class IsemptyPipe implements PipeTransform {
  transform(value: any, replaceBy:any): any {    
			return value ? value : replaceBy;		
  }
}
@Pipe({ name: 'removespecialchar'})
export class RemoveSpecialCharPipe implements PipeTransform {
  transform(value: any): any {    
    return typeof value === 'string' ? value.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '') : value;
  }
}