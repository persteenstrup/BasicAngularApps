import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';

@Component({
  selector: 'app-powerlevel',
  templateUrl: './powerlevel.component.html',
  styleUrls: ['./powerlevel.component.css']
})
export class PowerlevelComponent implements OnInit {
  power:number;
  constructor(private _powerService:PowerService) { this.power = 1;}
  

  onSubmit(){
    if(this.power>100){this.power = 100;}
    else if(this.power<1) {this.power = 1;}
    this._powerService.updatePower(this.power);
  }
  ngOnInit() { }

}
