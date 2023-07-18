import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GateGuard implements CanActivate {
  constructor(private rout : Router,private AuthService : AuthService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.AuthService.checkIsAuthenticated()){
        return true
      }
            this.rout.navigate(["/auth"])
            return false

  }


}
