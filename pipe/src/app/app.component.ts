import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'pipe';
  birthday = new Date()
  Fahrenheit:number=0
  celcius:number=0*/

  user= new FormGroup({
    name:new FormGroup({
    fname: new FormControl(''),
    mname: new FormControl(''),
    lname: new FormControl('')
  }),
  address:new FormGroup({
    state: new FormControl(''),
    city: new FormControl(''),
    pin:new FormControl('')
  })
 })

 check(){
   console.log(this.user.value);
   
 }

 state:any=[
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
]

cityName:any={
  "West Bengal":["Raniganj","Asansol"]
}
city:any=[]

getCity(e:any){
  console.log(e.target.value);
  this.city=this.cityName[e.target.value]
}
pin:Number=0
pinCode:any={
  "Raniganj": 713347,
  "Asansol": 713335
}
msg:string=''
getPinCode(arg:any){
  console.log("working"+arg.target.value);
  
  this.pin=this.pinCode[arg.target.value]
}

}
