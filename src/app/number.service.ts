import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
  numbers:Array<number>
  numbers1:Array<number>
  numbers2:Array<number>
  difference:number
  constructor() {
    this.numbers = [];
    this.numbers1 = [];
    this.numbers2 = [];
    this.difference = 0;
   }

  GenNum(val:number){
    this.numbers = [];
    for(let i=0; i<Math.ceil(Math.random()*3);i++){ 
      this.numbers.push(Math.floor(Math.random()*11)+1);
    }
    //console.log("Numbers 1:", this.numbers1);
    //console.log("Numbers 2:", this.numbers2);
    //console.log(this.numbers)
    if(val == 1){
      this.numbers1 = this.numbers1.concat(this.numbers)
    }
    else { this.numbers2 = this.numbers2.concat(this.numbers)}
  }
}
