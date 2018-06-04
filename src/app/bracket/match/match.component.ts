import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() closeDisplay = new EventEmitter();
  @Output() viewResults = new EventEmitter<Match<any>>()
  // viewResults = false;
  home: boolean;
  
  constructor(){}

  ngOnInit() {
    console.log(this.matchDetails);
    // console.log(this.matchDetails.final);
    // this.findLocation();
  }

  findLocation() {
    // let winner = this.matchDetails.winner.name;
    // if (this.matchDetails.matchInfo) {
    //   if ()

    // }
  }

  toggleDisplay() {
    this.closeDisplay.emit();

    setTimeout(() => {
      this.viewResults.emit(this.matchDetails);
    }, 0)
  }

}
