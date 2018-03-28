import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GoldService {
  sum: number
  sumChange: Subject<number> = new Subject<number>();
  result:number
  history:Array<string>
  stringwinloss:string

  constructor() {
    this.sum = 100;
    this.history = [];
    this.stringwinloss = "earned"
    this.result;
  }
  makegold(place:string){
    if (place == "farm"){
      this.result =Math.floor(Math.random()*4+2)
      this.sum += this.result;
      //console.log(this.result);
    }
    if (place == "cave"){
      this.result =Math.floor(Math.random()*6+5)
      this.sum += this.result;
      //console.log(this.result);
    }
    if (place == "casino"){
      this.result = Math.floor(Math.random()*101)
      let winloss:number
      if (Math.random()<0.5)
      {winloss = -1;
        this.stringwinloss = 'lost'
      }
      else {winloss = 1}
      this.sum += this.result*winloss;
      //console.log(this.result*winloss);
    }
    if (place == "house"){
      this.result = Math.floor(Math.random()*9+7)
      this.sum += this.result;
      //console.log(this.result);
    }
    this.sumChange.next(this.sum)
    this.history.push(`You've ${this.stringwinloss} ${this.result} gold at the ${place}`)
    this.stringwinloss = 'earned'
    console.log(this.history)
  }
}
