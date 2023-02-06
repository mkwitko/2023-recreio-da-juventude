import { Injectable } from '@angular/core';
import { UserClass } from 'src/app/classes/user/user-class';

@Injectable({
  providedIn: 'root',
})
export class MasterReqService {
  constructor(private userClass: UserClass) {}

  setUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userClass
        .setClass()
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  setAll(): Promise<any> {
    return new Promise((resolve, reject) => {});
  }

  clearAllCache(): Promise<any> {
    return new Promise((resolve, reject) => {});
  }
}
