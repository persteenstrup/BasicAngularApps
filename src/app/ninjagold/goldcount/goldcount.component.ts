import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoldService } from '../../gold.service';

@Component({
  selector: 'app-goldcount',
  templateUrl: './goldcount.component.html',
  styleUrls: ['./goldcount.component.css']
})
export class GoldcountComponent implements OnInit, OnDestroy {
  sum:number
  _subscription:any;
  constructor(private _goldService:GoldService) {
  }

  ngOnInit() {
  this.sum = this._goldService.sum;
  this._subscription = this._goldService.sumChange.subscribe((value) => { this.sum = value; })
  }
  
  ngOnDestroy(){
    this._subscription.unsubscribe();
  }
}
