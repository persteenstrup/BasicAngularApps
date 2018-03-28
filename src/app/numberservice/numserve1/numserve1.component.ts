import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../number.service';


@Component({
  selector: 'app-numserve1',
  templateUrl: './numserve1.component.html',
  styleUrls: ['./numserve1.component.css']
})
export class Numserve1Component implements OnInit {
  numbers1:Array<number>
  constructor(private _numberService: NumberService) {
    this.numbers1 = this._numberService.numbers1
  }

  OnClick() {
    this._numberService.GenNum(1)
    this.numbers1 = this._numberService.numbers1;
  }

  ngOnInit() {
  }

}
