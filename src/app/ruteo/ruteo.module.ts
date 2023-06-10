import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuteoRoutingModule } from './ruteo-routing.module';
import { VistaComponent } from './vista/vista.component';


@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    RuteoRoutingModule
  ]
})
export class RuteoModule { }
