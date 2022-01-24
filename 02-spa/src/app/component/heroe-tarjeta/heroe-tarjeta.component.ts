import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { heroes } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  LONGITUD_TEXTO: number = 350;

  @Input() heroe!:heroes;
  @Input() indice!: number;
  @Output() heroeSeleccionado!: EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSeleccionado= new EventEmitter<number>()
   }

  ngOnInit(): void {
  }

  verHeroe(id:number)
  {
    // this.router.navigate(['/heroe', id]);
    this.heroeSeleccionado.emit(this.indice);
    
  }

  puntosSuspensivos(id:number):string
  {
     if (this.heroe.bio.length > this.LONGITUD_TEXTO){
      return '...';
     }
     return '';
    return "hola"
  }

}
