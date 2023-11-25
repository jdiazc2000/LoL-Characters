import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  ApiData:any
  ChampionsSplash: any

  constructor(private championsService: ChampionsService,
              private router: Router){}

  ngOnInit(): void {
    this.championsService.getChampions().subscribe(
      (response) => {
           this.ApiData = Object.values(response.data);    
      },
      (error) => {
        console.log('ERROR', error)
      }      
    )
  }
  
  SearchChampion(champion:string){
    this.router.navigate(['/champion/' + champion])
  }

}
