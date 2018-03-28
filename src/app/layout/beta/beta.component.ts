import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers:Array<number>;

  constructor(private _dataService: DataService) {
    this.numbers = this._dataService.retrieveNumbers();
   }

  ngOnInit() {
    //this.numbers = this._dataService.retrieveNumbers();
  }

}
