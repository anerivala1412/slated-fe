import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private readonly API_URL = 'https://api.genderize.io/';

  constructor(private httpClient: HttpClient) {}
 
  getGender(name:any) {
    return this.httpClient.get(`${this.API_URL}?name=${name}`);
  }
}
