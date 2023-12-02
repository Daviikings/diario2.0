import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule),
      },
      {
        path: 'perfil/:id',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule),
      },
      {
        path: 'lista-usuario',
        loadChildren: () => import('../lista-usuario/lista-usuario.module').then(m => m.ListaUsuarioPageModule),
      },
      {
        path: '', // Ruta principal, carga la página de inicio por defecto
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
