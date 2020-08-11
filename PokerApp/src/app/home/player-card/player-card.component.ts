import { Component, OnInit, Input, ViewChild, TemplateRef} from '@angular/core';
import { Player } from 'src/interfaces/Player';
import { InfoListComponent } from '../info-list/info-list.component';
import { NbPopoverDirective } from '@nebular/theme';
import { PlayerInfoService } from '../player-info.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  listComponent = InfoListComponent;
  component: any = this.listComponent;
  
  @Input() player: Player;

  constructor(private playerInfo: PlayerInfoService) { }

  ngOnInit(): void {
  }

  setInfo(){
    this.playerInfo.setPlayer(this.player);
  }


}
