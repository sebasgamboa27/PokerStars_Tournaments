import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { Tournament } from 'src/interfaces/Tournament';

@Component({
  selector: 'app-tournament-menu',
  templateUrl: './tournament-menu.component.html',
  styleUrls: ['./tournament-menu.component.css']
})
export class TournamentMenuComponent implements OnInit {

  @Input() Name: string;
  @Input() Date: string;

  tournaments: Tournament[];

  @Input() PlayerName: string;
  currentTournament: Tournament;
  @Input() Money: string;

  @Input() FirstPlace: string;
  @Input() SecondPlace: string;

  successAlert: boolean;
  timeLeft: number = 10;
  interval;

  constructor(private database: DatabaseService) { }

  async ngOnInit(): Promise<void> {
    this.tournaments = await this.database.getTournaments();
    this.successAlert = false;
  }

  async insertTournament(){
    console.log(this.Date.toString());
    await this.database.insertTournament(this.Name,this.Date.toString());
    this.tournaments = await this.database.getTournaments();
    this.startTimer();
    
  }

  startTimer() {
    this.successAlert = true;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.successAlert = false;
      }
    },1000)
  }

  async insertParticipant(){
    debugger;
    let playerID = await this.database.getPlayerID(this.PlayerName);
    let newMoney = "-"+this.Money;

    await this.database.insertParticipation(playerID[0].ID,this.currentTournament.ID);
    await this.database.updatePlayersMoney(playerID[0].ID,newMoney);
    await this.database.updateTournamentMoney(this.currentTournament.ID,this.Money);

    this.tournaments = await this.database.getTournaments();

    this.startTimer();
  
  }

  changeTournament(tournament: Tournament){
    this.currentTournament = tournament;
  }

  async insertWinners(){
    let ID1 = await this.database.getPlayerID(this.FirstPlace);
    let ID2 = await this.database.getPlayerID(this.SecondPlace);
    
    await this.database.insertWinners(this.currentTournament.ID,ID1[0].ID,ID2[0].ID);
    let money = this.currentTournament.Money;
    let temp = parseInt(money);
    
    let first = (temp/4)*3;
    let second = (temp/4);

    debugger;

    await this.database.updatePlayersMoney(ID1[0].ID,first.toString());
    await this.database.updatePlayersMoney(ID2[0].ID,second.toString());

    this.startTimer();

  }

}
