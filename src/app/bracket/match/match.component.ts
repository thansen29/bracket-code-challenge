import { Component, OnInit, Input } from '@angular/core';
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
  // @Input() index: number;
  viewResults = false;
  
  constructor(){}

  ngOnInit() {
  }

  toggleDisplay() {
    this.viewResults = true;
  }

  closeDisplay() {
    this.viewResults = false;
  }

}
