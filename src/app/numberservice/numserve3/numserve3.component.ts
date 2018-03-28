import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../number.service';


@Component({
  selector: 'app-numserve3',
  templateUrl: './numserve3.component.html',
  styleUrls: ['./numserve3.component.css']
})
export class Numserve3Component implements OnInit {
  n:Array<number>
  sum:number
  constructor(private _numberService:NumberService) {
    this.n = [];
  }
  OnClick() {
    this.sum = 0;
    let n1 = this._numberService.numbers1;
    let n2 = this._numberService.numbers2;
    //console.log(n1)
    //console.log(n2)

    this.n = n1.concat(n2);
    console.log(this.n)
    for(let i=0; i<this.n.length;i++){
      this.sum += this.n[i];
    }
    this._numberService.difference = this.sum;
  }
  ngOnInit() {
  }

}
