import { Component, Input, OnInit } from '@angular/core';
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
  homeTeam: Team;
  awayTeam: Team;

  constructor() { }

  ngOnInit() {
    if (this.matchDetails.seedMatches.length) {
      this.homeTeam = this.matchDetails.seedMatches[0].winner;
      this.awayTeam = this.matchDetails.seedMatches[1].winner;
    }
  }

}
