import { Injectable } from '@angular/core';
import configurl from '../assets/config/config.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductOfferDetail } from './Model/ProductOfferDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  config = {
    ApiUrl: configurl.apiServer.url,
    };

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe((data) => {
      this.config.ApiUrl = data.apiServer.url;
      });
  }
  getUserList(): Observable<ProductOfferDetail[]> {
    return this.http.get<ProductOfferDetail[]>(this.config.ApiUrl + '/offers');
  }
  getUserDetailsById(id: string): Observable<ProductOfferDetail> {
    return this.http.get<ProductOfferDetail>(this.config.ApiUrl + '/offers' + id);
  }
  public getJSON(): Observable<any> {
    return this.http.get('./assets/config/config.json');
    }
}
