import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[];

  constructor() { 
    this.numbers = [1,2,3];
  }

  retrieveNumbers():number[]{
    return this.numbers;
  }
  addNumber(num: number){
    this.numbers.push(num);
  }
}
