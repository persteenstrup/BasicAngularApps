import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class PowerService {
    power: number
    powerChange: BehaviorSubject<number>

    constructor() {
        this.power = 1;
        this.powerChange = new BehaviorSubject(1);
    }

    updatePower(power:number){
        console.log("updated power super")
        this.power = power;
        this.powerChange.next(this.power);
    }

}