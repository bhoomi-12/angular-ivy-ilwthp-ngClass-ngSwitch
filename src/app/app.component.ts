import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // myClass:string;
  tabSelected:string;
  names=["Muneshsir","Zalak" ,"Grishma" , "Vishal" , "Neel" , "Harsh" , "Akash" ,"Prachi" ,"peenal" , "peenal","Bhoomi" ,"Pooja" , "Dipesh" , "Roger" , "Jatin" , "Peenal" , "Dhrishil"];
  getNames(name){
    if(name== "Bhoomi" || name=="Muneshsir")
    return 'mee';
    else return "batchmates"
  }
}
