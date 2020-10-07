import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponenteComponent } from './p-componente/p-componente.component';
import { SComponenteComponent } from './s-componente/s-componente.component';


const routes: Routes = [
  {path:'p-componente', component: PComponenteComponent} ,
  {path:'s-componente', component: SComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
