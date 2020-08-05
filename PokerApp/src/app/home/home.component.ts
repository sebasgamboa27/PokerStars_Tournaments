import { Component, OnInit } from '@angular/core';
import { Player } from 'src/interfaces/Player';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players : Player[]
  navBarStatus: boolean;

  constructor(private database: DatabaseService) { }

  async ngOnInit(): Promise<void> {
    this.navBarStatus = true;
    this.players = await this.database.getPlayers();
  }

  changeStatus(){
    this.navBarStatus = !this.navBarStatus;
  }

}
