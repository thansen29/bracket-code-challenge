import { Component, OnInit, Input } from '@angular/core';
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


  allMatches = [];

  // teams: Team[];

  constructor() { }

  ngOnInit() {
    this.traverseTree(this.matchDetails);
  }

  traverseTree(matchDetails) {
    let queue = [matchDetails];
    let match;
    while (queue.length) {
      match = queue.shift();

      // this.displayMatch(match);
      this.allMatches.push(match);
      // console.log(match);
      // this.generateMatches(match);

      for (let i = 0; i < match.seedMatches.length; i++) {
        queue.push(match.seedMatches[i]);
      }
    }

    // console.log(this.allMatches);
  }

  generateMatches(match) {
    let hasSeeds = Boolean(match.seedMatches.length);
    let newMatch;
    let s = 'hello';
    if (hasSeeds) {
      // newMatch = new MatchComponent(s);
      // newMatch = new MatchComponent(hasSeeds, match.winner, match.seedMatches[0],
      //                                   match.seedMatches[1], match.matchInfo);

    } else {
      // newMatch = new MatchComponent(s);      
      // newMatch = new MatchComponent(hasSeeds, match.winner.name);
    }

    this.allMatches.push(newMatch);

    // let completedMatch;
    // if (match.seedMatches.length) {
    //   completedMatch = {
    //     winner: match.winner.name,
    //     seed1: match.seedMatches[0].winner,
    //     seed2: match.seedMatches[1].winner,
    //     results: match.matchInfo
    //   }
    // } else {
    //   completedMatch = {
    //     winner: match.winner.name
    //   }
    // }

    // this.allMatches.push(completedMatch);
    // this.allMatches.push(newMatch);
    
  }

}
