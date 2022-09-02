import { Component, OnInit, Inject } from '@angular/core';
import {AuthService, User} from '@auth0/auth0-angular'
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: User|null|undefined

  constructor(@Inject(DOCUMENT) public document: Document, public auth:AuthService) { 
      this.auth.user$.subscribe(user=>this.usuario=user)
  }

  ngOnInit(): void {
  }

}
