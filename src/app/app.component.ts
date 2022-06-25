import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  // myClass:string;
  tabSelected: string;
  tbbi = [];
  tbtri= [];
  names = [
    'Muneshsir','Zalak','Grishma','Vishal','Neel','Harsh','Akash','Prachi','peenal','Bhoomi','Pooja','Dipesh','Roger', 'Jatin','Peenal', 'Dhrishil',
  ];
  getNames(name) {
    if (name == 'Bhoomi' || name == 'Muneshsir' || name == 'Zalak')
      return 'mee';
    else return 'batchmates';
  }
  remove(name) {
      this.names.splice(this.names.indexOf(name), 1);
  }
  addTab(name){
    this.tbbi.push(this.name);
  }
  removebi(tbtwo) {
    this.tbbi.splice(this.tbbi.indexOf(tbtwo), 1);
}
addbiTab(name){
  this.tbtri.push(this.name);
}
removetri(tbthree){
  this.tbtri.splice(this.tbtri.indexOf(tbthree),1)
}
addtriTab(name){
  this.tbbi.push(this.name);
  }
}