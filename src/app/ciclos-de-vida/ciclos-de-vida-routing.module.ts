import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './components/ciclos/ciclos.component';

const routes: Routes = [

{
  path: '',
  component: CiclosComponent
  
}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiclosDeVidaRoutingModule { }
