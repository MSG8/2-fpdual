import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component'
import { AboutComponent } from './component/about/about.component'
import { HeroesComponent } from './component/heroes/heroes.component'
import { HeroeComponent } from './component/heroe/heroe.component'

const routes: Routes = [
  {
    path: 'about',component: AboutComponent
  },
  { path: 'heroes',component: HeroesComponent},
  { path: 'heroe/:id',component: HeroeComponent},

  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
