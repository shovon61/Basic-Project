import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACComponent } from '../a-c/a-c.component';

const routes: Routes = [
  { path:'a-c', component:ACComponent },
  { path:'', redirectTo:'a-c',pathMatch:'full'},
  { path:'**', redirectTo:'a-c',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule { }
