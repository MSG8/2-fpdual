import { Component, OnInit } from '@angular/core';
import{heroes, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes: heroes[];

  constructor(private _heroesService:HeroesService) {
    this._heroes = [];
  }

  ngOnInit(): void {
    this._heroes = this._heroesService.getHeroes();
    console.log(this._heroes);
  }
  get heroes():heroes[]{
    return this._heroes;
  }
}
