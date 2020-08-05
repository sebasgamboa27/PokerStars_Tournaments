import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Player } from 'src/interfaces/Player';
import { Tournament } from 'src/interfaces/Tournament';

@Component({
  selector: 'app-statistics-menu',
  templateUrl: './statistics-menu.component.html',
  styleUrls: ['./statistics-menu.component.css']
})
export class StatisticsMenuComponent implements OnInit {

  players: Player[];
  tournaments: Tournament[];

  constructor(private database: DatabaseService) { }

  async ngOnInit(): Promise<void> {
    this.players = await this.database.getPlayers();

    this.players.sort(this.compare);

    this.players.forEach(element => {
      this.getWinsbyPlayer(element);
    });

    this.tournaments = await this.database.getTournaments();

    this.tournaments.forEach(tourney => {
      this.getWinsbyTourney(tourney);
    });

  }

  compare( a:Player, b:Player ) {
    const moneyA = parseInt(a.Money);
    const moneyB = parseInt(b.Money);

    if ( moneyA < moneyB ){
      return 1;
    }
    if ( moneyA > moneyB ){
      return -1;
    }
    return 0;
  }

  async getWinsbyPlayer(player:Player){

    debugger;

    let wins = await this.database.getWins(player.ID);
    player.Wins = wins[0][''];
  }

  async getWinsbyTourney(tourney:Tournament){

    debugger;

    let winner = await this.database.getTournamentWinner(tourney.ID);
    tourney.Winner = winner[0].Name;
  }
  

}
