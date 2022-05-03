import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempconvert'
})
export class TempconvertPipe implements PipeTransform {
  temp:number=0
  transform(value: number, unit:string){
    switch (unit)
    {
      case 'C':
        this.temp=9/5*(value)+32
      break;
      case 'F':
        this.temp=(value-32)*5/9
    }
    return this.temp
  }

}
