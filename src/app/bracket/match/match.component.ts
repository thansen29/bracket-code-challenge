import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../../team.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'sf-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {
  @Input() matchDetails: Match<any>;
  @Input() sport: string;
  @Output() closeDisplay = new EventEmitter();
  @Output() viewResults = new EventEmitter<Match<any>>()
  // viewResults = false;

  // allMatches = [];
  
  
  constructor(){}

  ngOnInit() {
  }

  // toggleDisplay() {
  //   this.viewResults = true;
  // }

  // closeDisplay() {
  //   this.viewResults = false;
  // }

  toggleDisplay() {
    this.closeDisplay.emit();

    setTimeout(() => {
      this.viewResults.emit(this.matchDetails);
    }, 0)
  }

}
