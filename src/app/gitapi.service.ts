import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';


@Injectable()
export class GitapiService {
  results:any
  git_followers:number
  git_public_repos:number

  constructor(private _http:HttpClient) {
    this.results
    this.git_followers = 0
    this.git_public_repos = 0
  }

  gitScore(){
    return this.git_followers+this.git_public_repos
  }

 
  getInfo(uname,cb,cb2){
    console.log(`https://api.github.com/users/${uname}`)
    this._http.get(`https://api.github.com/users/${uname}`).subscribe(
      (res) => {
        console.log(cb, "nr1")
        console.log(cb2)
        //console.log(res['followers'])
        this.git_followers = res['followers'];
        //console.log(this.git_followers)
        this.git_public_repos = res['public_repos']
        cb()})
    }
  }

