import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { PlayerInfoService } from '../player-info.service';
import { Player } from 'src/interfaces/Player';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  player: Player;
  participations: number;
  average: number;

  constructor(private database: DatabaseService,private playerInfo: PlayerInfoService) { }

  async ngOnInit(): Promise<void> {
    this.player = this.playerInfo.getPlayer();

    const participations = await this.database.getParticipations(this.player.ID);
    this.participations = participations[0][''];

    if(this.participations != 0){
      this.average = (parseInt(this.player.Money) / this.participations);
    }
    else{
      this.average = 0;
    }

  }

}
