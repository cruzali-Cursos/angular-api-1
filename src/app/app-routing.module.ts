import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestionRoutingModule } from './pages/gestion/gestion-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gestion', loadChildren: () => import('./pages/gestion/gestion.module').then(m => m.GestionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
