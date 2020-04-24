import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

isLoggedIn=false;
  constructor(private _router: Router) { }

  isAuthenticated(){
  	if(this.isLoggedIn == true){
  		return true;
  	}
  	else{
  		return false;
  	}
  }
  setLoggedIn(){
  	this.isLoggedIn=true;
  }
  setLoggedOut(){
  	this.isLoggedIn=false;
  	this._router.navigate(['/login']);
  }
}
