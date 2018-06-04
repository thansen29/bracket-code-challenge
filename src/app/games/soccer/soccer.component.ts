import { Component, Input, OnInit } from '@angular/core';
import { SoccerInfo } from './soccer-info.interface';
import { Match } from '../../match.interface';
import { Team } from '../../team.interface';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent implements OnInit {

  @Input() matchInfo: SoccerInfo;
  @Input() matchDetails: Match<any>;
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
