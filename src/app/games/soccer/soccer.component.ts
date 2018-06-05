import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SoccerInfo, SoccerTeamStats } from './soccer-info.interface';
import { Match } from '../../match.interface';
import { Team } from '../../team.interface';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent implements OnInit {
  @Input() matchInfo: SoccerInfo;
  @Input() matchDetails: Match<SoccerTeamStats>;
  @Input() homeTeam: Team;
  @Input() awayTeam: Team;
  @Output() closeDisplay = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  closeView() {
    this.closeDisplay.emit();
  }

}
