import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../../match.interface';
import { Team } from '../../team.interface';

@Component({
  selector: 'sf-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.less']
})
export class SportComponent implements OnInit {
  @Input() matchInfo: Match<any>;
  @Input() sport: string;
  @Input() matchDetails: Match<any>;
  @Input() viewResults: boolean;
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
