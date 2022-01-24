import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HeroesService, heroes } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe = {} as heroes;
  constructor(private activatedRoute: ActivatedRoute,private heroesService:HeroesService)
  {
    this.activatedRoute.params.subscribe(parametros =>
    {
      this.heroe = this.heroesService.getHeroe(parametros['id']);
      console.log(this.heroe);
    })
  }


  ngOnInit(): void {
  }

}
