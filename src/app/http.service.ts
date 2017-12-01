import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
 api = 'http://demo8205703.mockable.io/';
  constructor(private httpClient: HttpClient){ }

  getLogin(){
  return this.httpClient.get(this.api + 'login');
  }
}
