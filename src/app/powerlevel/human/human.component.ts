import { Component, OnInit } from '@angular/core';
import { PowerService } from '../../power.service';


@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  power:number

  constructor(private _powerService:PowerService) {
    this.power = 1;
  }



  ngOnInit() {
    this._powerService.powerChange.subscribe(
      (res) => {this.power = res}
    )
  }

}
