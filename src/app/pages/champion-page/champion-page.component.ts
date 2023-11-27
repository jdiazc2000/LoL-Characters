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
  championBannerUrl!: string;
  championSquareUrl!: string;
  championSkins!: string;
  SkinChampionSelected!: string;
  skinLoading: boolean = true;
  API_KEY:string = "RGAPI-e59c1375-58d5-4571-9cd2-4e9f2f0d3a93"

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
          this.championSquareUrl = 'http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/' + this.championName + '.png';
          this.championSkins = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.championName;
          this.championBannerUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.championName +'_0.jpg';
          this.SkinChampionSelected = this.championBannerUrl
          this.skinLoading = false
          console.log(this.championInfo);
        },
        (error) => {
          this.router.navigate(['/'])
          console.log('Campeón no encontrado')
        }
      );
    });
  }

   ChangeSkin(SkinID:number){
      //this.skinLoading = true;
      this.SkinChampionSelected = this.championSkins  + '_' + SkinID + '.jpg' + "?api_key=" + this.API_KEY;
      console.log(this.SkinChampionSelected)
   }

   ErrorImageStatus(){
    this.SkinChampionSelected = 'https://sitechecker.pro/wp-content/uploads/2023/06/403-status-code.png'
   }
}
  
