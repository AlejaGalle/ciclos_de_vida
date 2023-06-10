import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosDeVidaRoutingModule } from './ciclos-de-vida-routing.module';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { FormsModule } from '@angular/forms';
import { VidaComponent } from './components/vida/vida.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CiclosComponent,
    VidaComponent
  ],
  imports: [
    CommonModule,
    CiclosDeVidaRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class CiclosDeVidaModule { }
