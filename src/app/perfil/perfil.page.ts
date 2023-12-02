import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Character{
  id: number;
  name: string;
  image: string;
  status?: string;
};

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  profileId: string = '';
  character: Character = {
    id: 0,
    name: '',
    image: '',
    status: ''
  }; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
  
    
    this.http.get<Character>('https://rickandmortyapi.com/api/character/' + this.profileId)
      .subscribe(
        res => {
          console.log(res);
          this.character = res; 
        },
        error => {
          console.error('Error en la solicitud HTTP:', error);
          
          this.character = { id: 0, name: 'Personaje no encontrado', image: 'url-de-imagen-predeterminada' };
        }
      );
  }
}  
