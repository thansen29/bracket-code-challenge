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
  @Output() closeDisplay = new EventEmitter();
  
  homeTeam: Team;
  awayTeam: Team;
  
  constructor() { }

  ngOnInit() {
    if (this.matchDetails.seedMatches.length) {
      this.homeTeam = this.matchDetails.seedMatches[0].winner;
      this.awayTeam = this.matchDetails.seedMatches[1].winner;
    }
  }

  closeView() {
    this.closeDisplay.emit();
  }

}
