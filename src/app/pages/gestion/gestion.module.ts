import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { NgFor } from '@angular/common';
import { GestionComponent } from './gestion.component';
import { AltasComponent } from './altas/altas.component';
import { ModalComponent } from './altas/modal/modal.component';



@NgModule({
  declarations: [
    GestionComponent,
    AltasComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    NgFor
  ]
})
export class GestionModule { }
