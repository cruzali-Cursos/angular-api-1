import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas/altas.component';
import { GestionComponent } from './gestion.component';

const routes: Routes = [
  { path: 'gestion', component: GestionComponent },
  { path: 'altas', component: AltasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRoutingModule { }
