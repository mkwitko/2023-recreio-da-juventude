import { UserClass } from '../classes/user/user-class';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavigationService } from '../services/navigation/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private navigation: NavigationService,
    private userClass: UserClass
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.userClass.getAuth().then((loginToken) => {
        if (loginToken) {
          this.navigation.goTo('home');
        }
        resolve(!loginToken ? true : false);
      });
    });
  }
}
