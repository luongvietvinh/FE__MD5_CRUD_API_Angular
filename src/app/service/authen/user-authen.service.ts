import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
  isLogin = false;
  name = 'vinh';
  constructor(private router:Router) { }

  login(){
this.isLogin = true;
  }
  logout(){
    this.isLogin = false;
    this.router.navigate(['/home'])
  }

}

