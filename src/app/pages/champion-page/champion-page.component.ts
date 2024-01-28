import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionsService } from 'src/app/services/champions.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  SkinChampionSelectedName!: string;
  SkinChampionName!: string;
  reversedFormattedText!: string;
  selectedBtnIndex!: any;
  activeBtn: boolean = true;
  ChampionInfoEng!:any  

  constructor(
    private championService: ChampionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.SkinChampionName = 'Predeterminado';
    this.activatedRoute.params.subscribe((params) => {
      this.championName = params['ChampionName'];

      this.championService.getChampionES(this.championName).subscribe(
        (response) => {
          this.championInfo = Object.values(response.data);
          this.championSquareUrl =
            'https://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/' +
            this.championName +
            '.png';
          this.championSkins =
            'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
            this.championName;
          this.championBannerUrl =
            'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
            this.championName +
            '_0.jpg';
          this.SkinChampionSelected =
            'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/' +
            this.championInfo[0].key +
            '/' +
            this.championInfo[0].skins[0].id +
            '.jpg';
     
          console.log(this.championInfo);
        },
        (error) => {
          this.router.navigate(['/']);
          console.log('Campeón no encontrado');
        }
      );



      this.championService.getChampionENG(this.championName).subscribe(
        (response) => {
            this.ChampionInfoEng = Object.values(response.data);
            console.log(this.ChampionInfoEng)
          },
          (error)=>{
            this.router.navigate(['/']);
            console.log('Campeón no encontrado');
          });
    });
  }

  return() {
    this.router.navigate(['/']);
  }

  ImageOk() {
    this.spinner.hide();
  }

  ChangeSkin(SkinID: number) {
    if ((this.selectedBtnIndex = SkinID)) {
      this.activeBtn = true;
    } else {
      this.activeBtn = false;
    }
    this.spinner.show();
    console.log(SkinID)
    this.SkinChampionSelected =
      'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/' + this.championInfo[0].key + '/' + this.championInfo[0].skins[SkinID].id + '.jpg';

    if (this.championInfo[0].skins[SkinID].name === 'default') {
      this.SkinChampionName = 'Predeterminado';
    } else {
      this.SkinChampionName = this.championInfo[0].skins[SkinID].name;
    }

    console.log(this.SkinChampionSelected);
  }

  ErrorImageStatus() {
    this.SkinChampionSelected = 'assets/images/403.webp';
  }
}
