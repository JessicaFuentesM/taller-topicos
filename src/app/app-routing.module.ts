import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import {AuthGuard} from '@auth0/auth0-angular'

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'heroe/:id', component: HeroeComponent },
	{ path: 'buscar/:termino', component: BuscadorComponent },
	{ path: 'perfil', component: PerfilComponent, canActivate:[AuthGuard] },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }


/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/
