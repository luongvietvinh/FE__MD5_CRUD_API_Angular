import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../user.service";
import {UserAuthenService} from "./user-authen.service";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenGuard implements CanActivate {
constructor(private userService: UserAuthenService) {
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.isLogin;
  }

}
