import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { Match } from '../match.interface';
import { Team } from '../team.interface';
import { MatchComponent } from './match/match.component';

@Component({
  selector: 'sf-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.less']
})
export class BracketComponent implements OnInit {
  @Input() matchDetails: Match<any>;
  @Input() sport: string;

  constructor() { }

  ngOnInit() {
  }

}
