import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { GitapiService } from '../gitapi.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-gitscore',
  templateUrl: './gitscore.component.html',
  styleUrls: ['./gitscore.component.css']
})
export class GitscoreComponent implements OnInit {
  user:any = new User()
  username:string

  git_score:number
  

  constructor(private _gitapiService : GitapiService) {

   }

   gitsynch(){
    this.git_score = this._gitapiService.gitScore();
   }

  onSubmit(){
    this.username = this.user.username;
    this.git_score = 0;
    console.log(this.username)
    this._gitapiService.getInfo(this.user.username, 
      () => {this.gitsynch()},
      this.gitsynch
    )
  }

  ngOnInit() {

  }

}
