import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) { }

  public  API_KEY:string = "RGAPI-e59c1375-58d5-4571-9cd2-4e9f2f0d3a93"
  private AllChampionsUrl = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/es_MX/champion.json'
  //private AllChampionsLoadingScreenUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  private FilterChampionUrlES = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/es_MX/champion/'
  private FilterChampionUrlENG = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/'

  public getChampions(): Observable<any>{
    return this.http.get<any>(`${this.AllChampionsUrl}`);
  }

  public getChampionES(champion: string): Observable<any>{
    return this.http.get<any>(`${this.FilterChampionUrlES + champion + '.json'}`,)
  }

  public getChampionENG(champion: string): Observable<any>{
    return this.http.get<any>(`${this.FilterChampionUrlENG + champion + '.json'}`,)
  }

}
