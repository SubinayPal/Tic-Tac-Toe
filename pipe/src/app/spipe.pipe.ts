import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spipe'
})
export class SpipePipe implements PipeTransform {

  v=0
  c=0
  msg:string=''
    transform(value: string){
      this.v=0
      this.c=0
      this.msg=''
      this.msg="Length :"+value.length
      value=value.toLowerCase()
      for(var i=0;i<value.length;i++)
      {
          switch(value[i])
          {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u': this.v++; break;
            default: this.c++;
          }
      }    
      this.msg+=" Vowels ="+this.v+" Consonents ="+this.c
      return this.msg
    }

}
