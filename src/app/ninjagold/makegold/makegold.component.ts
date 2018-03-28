import { Component, OnInit } from '@angular/core';
import { GoldService } from '../../gold.service';

@Component({
  selector: 'app-makegold',
  templateUrl: './makegold.component.html',
  styleUrls: ['./makegold.component.css']
})
export class MakegoldComponent implements OnInit {

  constructor(private _goldService:GoldService) { }
  
  OnClick(place:string){
    this._goldService.makegold(place);
  }

  ngOnInit() {
  }

}
