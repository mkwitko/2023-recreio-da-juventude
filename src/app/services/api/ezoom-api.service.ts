import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserClass } from 'src/app/classes/user/user-class';

@Injectable({
  providedIn: 'root',
})
export class EzoomApiService {
  constructor(private http: HttpClient, private userClass: UserClass) {}

  // protected baseUrl = environment.api.baseUrl;
  protected baseUrl = environment.global.api.localUrl;

  /*
    Metódo de conexão Get
    Retorna resultado da requisição feita à url base, vinda de src/environments
    */
  async get(method: string, params?: HttpParams): Promise<any> {
    const headers = await this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + method, { headers, params }).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  async post(method: string, params): Promise<any> {
    console.log(params);
    const headers = await this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + method, params, { headers }).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  /*
    Cabeçalhos
    */
  private async getHeaders() {
    let sessionId = '';
    await this.userClass.getAuth().then((res) => {
      if (res.status) {
        sessionId = res.data.session_id;
      }
    });
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'api-token': environment.global.api.token,
      'api-version': environment.global.api.version,
      Accept: 'application/json',
      'session-id': sessionId,
    };
    return headers;
  }
}
