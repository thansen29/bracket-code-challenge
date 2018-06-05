import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';


import { AppComponent } from './app.component';
import { FootballComponent } from './games/football/football.component';
import { SoccerComponent } from './games/soccer/soccer.component';
import { BracketComponent } from './bracket/bracket.component';
import { MatchComponent } from './bracket/match/match.component';
import { SportComponent } from './games/sport/sport.component';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    SoccerComponent,
    BracketComponent,
    MatchComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
