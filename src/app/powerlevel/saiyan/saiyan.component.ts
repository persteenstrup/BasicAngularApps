import { Component, OnInit } from '@angular/core';
import { PowerService } from '../../power.service';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  power:number
  constructor(private _powerService:PowerService) {
    this.power = 10;
  }

  ngOnInit() {
    this._powerService.powerChange.subscribe(
      (res) => {this.power = res*10}
    )
  }

}
