import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../number.service';

@Component({
  selector: 'app-numserve2',
  templateUrl: './numserve2.component.html',
  styleUrls: ['./numserve2.component.css']
})
export class Numserve2Component implements OnInit {
  numbers2:Array<number>
  constructor(private _numberService:NumberService) {
    this.numbers2 = this._numberService.numbers2
   }

  OnClick() {
    //console.log(this._numberService.GenNum(2));
    this._numberService.GenNum(2);
    this.numbers2 = this._numberService.numbers2;
  }
  ngOnInit() {
  }

}
