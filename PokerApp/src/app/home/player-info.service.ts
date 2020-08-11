import { Injectable } from '@angular/core';
import { Player } from 'src/interfaces/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  player: Player;

  constructor() { }

  setPlayer(player:Player){
    this.player = player;
  }

  getPlayer(){
    return this.player;
  }
}
