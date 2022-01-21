import { Component, OnInit } from '@angular/core';
import{heroes, HeroesService} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _heroes: heroes[];

  constructor(private _heroesService:HeroesService,private router:Router) {
    this._heroes = [];
  }

  ngOnInit(): void {
    this._heroes = this._heroesService.getHeroes();
    console.log(this._heroes);
  }
  get heroes():heroes[]{
    return this._heroes;
  }

  verHeroe(id:number)
  {
    this.router.navigate(['/heroe', id]);
  }
}
