import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [{from:"bill@gates.com", importance:true, subject:"New Windows",content:"Windows 11 will launch in the year 2100"},{from:"ada@gates.com", importance:true, subject:"smth",content:"I am Ada"},{from:"john@gates.com", importance:false, subject:"New Windows",content:"Just Kidding"},{from:"gabe@gates.com", importance:false, subject:"HL3",content:"New Update coming"}
];
  colors = ["#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "F5F5DC", "#FFE4C4", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0","#7FFF00", "#D2691E", "#6495ED", "#DC143C"]
  random = [Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19)];
  time = Date.now();
  zone = 'UTC';

  refreshColors(){
    this.random = [Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19),Math.floor(Math.random()*19)];
  }

  onButtonClick(new_zone){
    if (new_zone == "clear"){
      this.zone = "UTC"
    }
    else {this.zone = new_zone};
  }
}


