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
  // skinLoading: boolean = true;
  selectedBtnIndex!: any;
  activeBtn: boolean = true
  API_KEY:string = "RGAPI-e8851fff-81ac-4e70-abb7-951a3a3542de"

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
          this.championSquareUrl = 'https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/' + this.championName + '.png';
          this.championSkins = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.championName;
          this.championBannerUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.championName +'_0.jpg';
          this.SkinChampionSelected = this.championBannerUrl
         // this.skinLoading = false
          console.log(this.championInfo);
        },
        (error) => {
          this.router.navigate(['/'])
          console.log('Campeón no encontrado')
        }
      );
    });
  }

  return(){
    this.router.navigate(['/'])
  }

   ChangeSkin(SkinID:number){
    if( this.selectedBtnIndex = SkinID){
      this.activeBtn = true
    }else{
      this.activeBtn = false
    }

      this.SkinChampionSelected = this.championSkins  + '_' + SkinID + '.jpg' + "?api_key=" + this.API_KEY;
      console.log(this.SkinChampionSelected)
   }

   ErrorImageStatus(){
    this.SkinChampionSelected = 'assets/images/403.webp'
   }
}
  
