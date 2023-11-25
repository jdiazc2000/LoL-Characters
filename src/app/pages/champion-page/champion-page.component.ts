import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champion-page',
  templateUrl: './champion-page.component.html',
  styleUrls: ['./champion-page.component.scss'],
})
export class ChampionPageComponent implements OnInit {
  championName!: string;
  championInfo: any; 
  championBannerUrl!: string 
  championSquareUrl!: string

  constructor(
    private championService: ChampionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.championName = params['ChampionName'];

      this.championService.getChampion(this.championName).subscribe(
        (response) => {
          this.championInfo = Object.values(response.data);
          this.championBannerUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.championName +'_0.jpg'
          this.championSquareUrl = 'http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/' + this.championName + '.png'
          console.log(this.championInfo)
        },
        (error) => {
          this.router.navigate(['/'])
          console.log('Campeón no encontrado')
        }
      );
    });

   
  }
}
