import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) { }

  private AllChampionsUrl = 'http://ddragon.leagueoflegends.com/cdn/13.11.1/data/es_MX/champion.json'
  private AllChampionsLoadingScreenUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  private FilterChampionUrl = 'http://ddragon.leagueoflegends.com/cdn/13.11.1/data/es_MX/champion/'

  public getChampions(): Observable<any>{
    return this.http.get<any>(`${this.AllChampionsUrl}`);
  }

  // public getChampionsLoadingScreens(champion: string): Observable<any>{
  //   return this.http.get<any>(`${this.AllChampionsLoadingScreenUrl + champion + '_0.jpg'}`,)
  // }

  public getChampion(champion: string): Observable<any>{
    return this.http.get<any>(`${this.FilterChampionUrl + champion + '.json'}`,)
  }

  

}
