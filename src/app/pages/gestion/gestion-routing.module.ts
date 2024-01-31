import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { ModalComponent } from './altas/modal/modal.component';

const routes: Routes = [
  
  { path: 'altas', component: AltasComponent },
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRoutingModule { }
