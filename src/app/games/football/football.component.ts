import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FootballInfo, FootballTeamStats } from './football-info.interface';
import { Team } from '../../team.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'sf-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.less']
})
export class FootballComponent implements OnInit {
  @Input() matchInfo: FootballInfo;
  @Input() matchDetails: Match<FootballTeamStats>;
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
