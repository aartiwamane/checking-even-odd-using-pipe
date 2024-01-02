import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check',
  standalone: true
})
export class CheckPipe implements PipeTransform 
{

  transform(value: number, ...args : unknown[]): unknown 
  {
      if(value % 2 ==0)
      {
        return "Number is Even number";
      }
    
      if(value%2 != 0)
      {
        return "number is odd";
      }
      return null;
  }

}
