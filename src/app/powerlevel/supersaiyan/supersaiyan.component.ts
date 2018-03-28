import { Component, OnInit } from '@angular/core';
import { PowerService } from '../../power.service';


@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
  power:number
  constructor(private _powerService:PowerService) {
    this.power = 100;
  }

  ngOnInit() {
    this._powerService.powerChange.subscribe(
      (res) => {this.power = res*100}
    )
  }

}
