import { Component, OnInit } from '@angular/core';
import {HeroesService,heroes} from "../../services/heroes.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  private _heroesEncontrados:heroes[]=[];

  constructor(private activatedRoute: ActivatedRoute,private heroesService:HeroesService)
  {
    this.activatedRoute.params.subscribe(parametros =>
    {
      this._heroesEncontrados = this.heroesService.buscarHeroes(parametros['texto']);
    });
  }

  get heroesEncontrados(){
    return this._heroesEncontrados;
  }
  ngOnInit(): void
  {

  }

}
