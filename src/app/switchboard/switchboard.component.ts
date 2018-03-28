import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchboard',
  templateUrl: './switchboard.component.html',
  styleUrls: ['./switchboard.component.css']
})
export class SwitchboardComponent implements OnInit {
  on_off: Array<string>  
  onButtonClick(item, idx){
    if(item == "ON"){
      this.on_off[idx] = "OFF"
    }
    else {
      this.on_off[idx] = "ON"
    }
  }
  constructor() {
    this.on_off = ['ON','ON','ON','ON','ON','ON','ON','ON','ON','ON']
   }

  ngOnInit() {
  }

}
