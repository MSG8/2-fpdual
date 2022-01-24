import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { AboutComponent } from './component/about/about.component';
import {HeroesService} from "./services/heroes.service";
import { HeroeComponent } from './component/heroe/heroe.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { BuscarComponent } from './component/buscar/buscar.component';
import { HeroeTarjetaComponent } from './component/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SidebarComponent,
    BuscarComponent,
    HeroeTarjetaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
