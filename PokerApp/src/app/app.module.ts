import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerCardComponent } from './home/player-card/player-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TournamentMenuComponent } from './home/tournament-menu/tournament-menu.component';
import { StatisticsMenuComponent } from './home/statistics-menu/statistics-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionsModule, NbIconModule, NbAlertModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerCardComponent,
    NavBarComponent,
    TournamentMenuComponent,
    StatisticsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbIconModule,
    NbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
