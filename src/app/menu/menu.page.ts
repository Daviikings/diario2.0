import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;
  people = 'nombre-del-icono';


  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Lista-usuario',
      url: '/menu/lista-usuario',
      icono: 'people'
    }
    
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  irAListaUsuario() {
    this.router.navigate(['/menu/lista-usuario']);
  }
  

  cambiarIndiceSeleccionado(i: number): void {
    this.indiceSeleccionado = i;
  }
  

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No, mejor no',
          handler: () => {

          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    
    await alert.present();
  }

}
