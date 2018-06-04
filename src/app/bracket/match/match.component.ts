import { Component, OnInit } from '@angular/core';
import { Team } from '../../team.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {

  constructor(){}
  // constructor(private hasSeeds: boolean, private winner: Team, private firstSeed?: Match<any>,
  //             private secondSeed?: Match<any>, private results?) { }

  ngOnInit() {
  }

}
