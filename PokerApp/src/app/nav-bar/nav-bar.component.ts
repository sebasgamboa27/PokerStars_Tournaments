import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NbIconModule, NbIconConfig } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

  @Output() status = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }   
  
  changeStatus(){
    this.status.emit(true);
  }

  goHome(){
    this.router.navigateByUrl('');
  }

  goTourneys(){
    this.router.navigateByUrl('/tourney');
  }

  goStats(){
    this.router.navigateByUrl('/stats');
  }

}
