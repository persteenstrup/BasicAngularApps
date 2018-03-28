import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User()
  users = [];
  constructor() { }

  onSubmit(form):void{
    console.log(form) 
    this.users.push(this.user);
    console.log(this.users);
    form.reset();
  }
  ngOnInit():void {
  
  }

}
