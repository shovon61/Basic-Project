import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LCComponent } from '../l-c/l-c.component';

const routes: Routes = [
  { path:'l-c',component:LCComponent },
  { path:'',redirectTo:'l-c',pathMatch:'full'},
  { path:'**',redirectTo:'l-c',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
