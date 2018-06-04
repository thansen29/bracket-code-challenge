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
  // @Input() matchDetails: Match<T>
  @Input() matchDetails;

  // allMatches = [];

  // teams: Team[];

  constructor() { }

  ngOnInit() {
    // this.buildMatches(this.matchDetails);
  }

  // buildMatches(matchDetails) {
  //   let queue = [matchDetails];
  //   let match;
  //   while (queue.length) {
  //     match = queue.shift();

  //     this.displayMatch(match);

  //     for (let i = 0; i < match.seedMatches.length; i++) {
  //       queue.push(match.seedMatches[i]);
  //     }
  //   }

  //   console.log(this.allMatches);
  // }

  // displayMatch(match) {
  //   let hasSeeds = match.seedMatches.length;
  //   let newMatch;
  //   if (hasSeeds) {
  //     newMatch = new MatchComponent(hasSeeds, match.winner, match.seedMatches[0],
  //                                       match.seedMatches[1], match.matchInfo);

  //   } else {
  //     newMatch = new MatchComponent(hasSeeds, match.winner.name);
  //   }

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
  //   this.allMatches.push(newMatch);
    
  // }

}
