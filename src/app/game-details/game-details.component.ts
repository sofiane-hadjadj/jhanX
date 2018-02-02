import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IgdbService } from '../igdb.service';
import { Observable } from 'rxjs/Observable';
import { Game } from '../game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private igdbService: IgdbService)
    {
     }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.igdbService.getGame(String(id)).
      subscribe(game => this.game = game);
  }

  getImage() {
    return this.game && this.game.screenshots && this.game.screenshots.length >= 1 &&
      this.game.screenshots[0].url || ''; 
  }

}
