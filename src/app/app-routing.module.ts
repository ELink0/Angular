import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfprComponent } from './ifpr/ifpr.component';
import { TadsComponent } from './tads/tads.component';
import { TurmaComponent } from './turma/turma.component';


const routes: Routes = [
  {path:"ifpr", component: IfprComponent},
  {path:"tads", component: TadsComponent},
  {path:"turma", component: TurmaComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
