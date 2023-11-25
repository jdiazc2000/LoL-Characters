import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomePageComponent
  },
  {
    path:'champion/:ChampionName',
    component: ChampionPageComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
