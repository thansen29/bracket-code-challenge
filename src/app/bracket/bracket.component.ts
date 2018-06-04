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
  viewResults = false;
  viewedMatch: Match<any>;
  allMatches = [];

  teams = {};
  numTeams: number;
  perColumn = [1,2,4,8,16,32,64,128,256,512];
  numCols;
  count = 0;

  Arr = Array;

  constructor() { }

  ngOnInit() {
    this.traverseTree(this.matchDetails);
  }

  traverseTree(matchDetails) {
    let queue = [matchDetails];
    let match;
    while (queue.length) {
      match = queue.shift();

      this.allMatches.push(match);
      this.addTeam(match)

      for (let i = 0; i < match.seedMatches.length; i++) {
        queue.push(match.seedMatches[i]);
      }
    }

    this.uniqueCount();
  }

  addTeam(match: Match<any>) {
    let name = match.winner.name;
    if (this.teams[name]) {
      this.teams[name]++;
    } else {
      this.teams[name] = 1;
    }
  }

  uniqueCount() {
    this.numTeams = _.keys(this.teams).length;
    this.getNumColumns(this.numTeams);
  }

  getNumColumns(numTeams: number) {
    let numCols = Math.ceil(Math.log(numTeams) / Math.log(2)) + 1; // + 1 to include champion as a column
    this.perColumn = this.perColumn.slice(0, numCols);
    
    this.numCols = Array(numCols).fill(1); 
  }

  nextMatch() {
    this.count++;
    if(this.allMatches[this.count-1]) {
      return this.allMatches[this.count-1];
    } else {
      return null;
    }
  }

  closeDisplay() {
    this.viewResults = false;
  }

  openDisplay(match: Match<any>) {
    this.viewResults = true;
    this.viewedMatch = match;
  }

}
