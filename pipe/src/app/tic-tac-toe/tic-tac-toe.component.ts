import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }
  arr:any=['1','2','3','4','5','6','7','8','9']
  mark:string="O"
  mark1:string="X"
  count:number=0;
  validate:boolean=true
  fun(e:any) {
    //console.log(e.target.value);
    this.count+=1;
    console.log(this.count);
    
    
    var x=e.target.value;
    this.mark=this.mark=="O"?"X":"O";
    this.mark1=this.mark1=="O"?"X":"O";
    this.arr[x-1]=this.mark;
    (e.target as HTMLButtonElement).disabled = true;
  }
msg:string="";
  check(){
    var result=-1;
    if(this.arr[0]==this.arr[1] && this.arr[1]==this.arr[2]){
      result=1;
      this.validate=false
      console.log("a");
    }
    else if(this.arr[4]==this.arr[5] && this.arr[5]==this.arr[6]){
      console.log("b");
      result=1;
      this.validate=false
      
    }
    else if(this.arr[7]==this.arr[8] && this.arr[8]==this.arr[9]){
      console.log("c");
      result=1;
      this.validate=false
      
    }
    else if(this.arr[0]==this.arr[4] && this.arr[4]==this.arr[7]){
      console.log("d");
      result=1;
      this.validate=false
    }
    else if(this.arr[1]==this.arr[5] && this.arr[5]==this.arr[8]){
      console.log("e");
      result=1;
      this.validate=false
    }
    else if(this.arr[2]==this.arr[5] && this.arr[5]==this.arr[8]){
      console.log("f");
      result=1;
      this.validate=false
    }
    else if(this.arr[0]==this.arr[4] && this.arr[4]==this.arr[8]){
      console.log("g");
      result=1;
      this.validate=false
    }
    else if(this.arr[2]==this.arr[4] && this.arr[4]==this.arr[6]){
      console.log("h");
      result=1;
      this.validate=false
    }
    if(result==1)
    {
      this.msg="Won"
    }
    else if(this.count==9){
      this.msg="Match Draw...!!!"
    }
    console.log(result);
    
  }
  
}
