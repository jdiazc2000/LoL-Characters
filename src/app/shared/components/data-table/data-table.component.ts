import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  ApiData:any
  ChampionsSplash: any
  @Input() page!: number;
  collection!: any[];  

  constructor(private championsService: ChampionsService,
              private router: Router){}

  ngOnInit(): void {
    this.championsService.getChampions().subscribe(
      (response) => {
           this.ApiData = Object.values(response.data); 
           this.collection = this.ApiData;  
           console.log(this.ApiData) 
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
