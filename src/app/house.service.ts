import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from './house';
import { HOUSES } from './mock-houses';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private housesUrl = 'https://anapioficeandfire.com/api/houses';
  constructor(
    private http: HttpClient) { }

  // getHouses(): Observable<House[]> {
  //   return of(HOUSES);
  // }
  getHouses (): Observable<House[]> {
    return this.http.get<House[]>(this.housesUrl)
  }
}
