import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournamentMenuComponent } from './home/tournament-menu/tournament-menu.component';
import { StatisticsMenuComponent } from './home/statistics-menu/statistics-menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tourney', component: TournamentMenuComponent },
  { path: 'stats', component: StatisticsMenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
