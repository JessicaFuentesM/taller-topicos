import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeroeComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    BuscadorComponent,
    AuthButtonComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({ ///////////////////////////////////////////////////////////
      domain: 'dev-6q1dmqi0.us.auth0.com', ////////////////////////
      clientId: 'lPBwanNSJ5hwOEUm7lQYyIafBDkTPbY4' //////////////////////////
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
