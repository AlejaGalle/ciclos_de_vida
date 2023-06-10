import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ciclos-de-vida/ciclos-de-vida.module').then(m =>m.CiclosDeVidaModule)
  },

  { 
   path: 'ruteo',
  loadChildren: () => import('./ruteo/ruteo.module').then(m =>m.RuteoModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
