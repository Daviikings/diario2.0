import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;
  
    // Obtener el valor del usuario desde localStorage
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString) {
      // Parsear el valor solo si no es null
      var usuario = JSON.parse(usuarioString);
  
      // Verificar si el usuario y la contraseña coinciden
      if (usuario && usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresar');
        localStorage.setItem('ingresado', 'true');  // Ajuste de la clave 'ingresado'
        this.navCtrl.navigateRoot('menu/inicio');  // Redirige al usuario a la página de inicio
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos',
          buttons: ['Aceptar'],
        });
  
        await alert.present();
      }
    } else {
      // Mostrar un mensaje si no hay datos de usuario
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se encontraron datos de usuario en el almacenamiento local',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
    }
  }
  

}
