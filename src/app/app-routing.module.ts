import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch: 'full' },
  {path: 'login',component: LoginComponent},
  {path: 'inicio', loadChildren: () => import('./components/inicio/inicio.module').then(x => x.InicioModule)},
  {path: 'enfermeria', loadChildren: () => import('./components/enfermeria/enfermeria.module').then(x => x.EnfermeriaModule)},
  {path: 'consulta', loadChildren: () => import('./components/consulta/consulta.module').then(x => x.ConsultaModule)},
  {path: '**', redirectTo: 'login',pathMatch: 'full'  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
