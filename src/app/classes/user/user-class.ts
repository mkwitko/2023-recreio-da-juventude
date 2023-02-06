import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';
import { UserInterface } from 'src/app/interfaces/user/user-interface';

@Injectable()
export class UserClass {
  public userLoginCredentials: UserInterface = {
    email: 'suporte@ezoom.com.br',
    password: '88888',
  };

  private info;
  private cachePath = environment.global.cache.user;

  constructor(private cache: CacheService) {}

  /*
  Retorna Informações da Autenticação
  */
  getAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cachePath)
        .then((res) => {
          if (res) {
            resolve(res);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Se o id da sessão existir -> Usuário Logado -> Retorna True
  */
  isLogged(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAuth()
        .then((res) => {
          if (res !== false) {
            resolve(true);
          } else {
            resolve(res);
          }
        })
        .catch(() => {
          reject(false);
        });
    });
  }

  get() {
    return this.info;
  }

  getCachePath() {
    return this.cachePath;
  }

  getCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cachePath)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setClass(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getCache().then((cacheInfo) => {
        this.set(cacheInfo);
        this.setCache();

        this.getAuth().then((res) => {
          if (res) {
            this.set(res);
            this.setCache();
            resolve(res);
          } else {
            if (cacheInfo) {
              resolve(cacheInfo);
            } else {
              reject(false);
            }
          }
        });
      });
    });
  }

  set(req) {
    this.info = req;
  }

  setCache() {
    this.cache.getCache(this.cachePath).then((res) => {
      if (!res) {
        this.cache.setCache(this.cachePath, this.get());
      }
    });
  }

  clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .removeCache(this.cachePath)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
