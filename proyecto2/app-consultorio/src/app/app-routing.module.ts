import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'recuperar-pass',
    redirectTo: 'recuperar-pass',
    pathMatch: 'full'
  },
  {
    path: 'reserva-hora',
    redirectTo: 'reserva-hora',
    pathMatch: 'full'
  },
  {
    path: 'buscar',
    redirectTo: 'buscar',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'reserva-hora',
    loadChildren: () => import('./pages/reserva-hora/reserva-hora.module').then( m => m.ReservaHoraPageModule)
  },
  {
    path: 'examenes',
    loadChildren: () => import('./pages/examenes/examenes.module').then( m => m.ExamenesPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
