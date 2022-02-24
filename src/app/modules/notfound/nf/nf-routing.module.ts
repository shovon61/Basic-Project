import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NFComponent } from '../n-f/n-f.component';

const routes: Routes = [
  { path:'n-f',component:NFComponent},
  { path:'',redirectTo:'n-f',pathMatch:'full'},
  { path:'**',redirectTo:'n-f',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NfRoutingModule { }
