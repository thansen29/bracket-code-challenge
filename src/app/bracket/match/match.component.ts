import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../team.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {
  @Input() matchDetails: Match<any>;
  @Input() sport: string;
  viewResults = false;
  
  constructor(){}

  ngOnInit() {
  }

  displayResults() {
    this.viewResults = true;
  }

}
