import { Component, OnInit } from '@angular/core';
import { GoldService } from '../../gold.service';

@Component({
  selector: 'app-historygold',
  templateUrl: './historygold.component.html',
  styleUrls: ['./historygold.component.css']
})
export class HistorygoldComponent implements OnInit {
  history:Array<String>
  constructor(private _goldService:GoldService) {
    this.history = this._goldService.history   
    
   }

  ngOnInit() {
    //this.history = this._goldService.history   
  }

}
