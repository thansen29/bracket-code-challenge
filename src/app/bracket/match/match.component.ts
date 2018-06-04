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
  
  constructor(){}

  ngOnInit() {
    // debugger
  }

  toggleDisplay() {
    this.closeDisplay.emit();

    setTimeout(() => {
      this.viewResults.emit(this.matchDetails);
    }, 0)
  }

}
