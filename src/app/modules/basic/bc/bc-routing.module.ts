import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BCComponent } from '../b-c/b-c.component';

const routes: Routes = [
  { path:'b-c', component:BCComponent },
  { path:'',redirectTo:'b-c',pathMatch:'full'},
  { path:'**',redirectTo:'b-c',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BcRoutingModule { }
