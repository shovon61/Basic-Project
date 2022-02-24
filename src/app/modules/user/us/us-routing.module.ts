import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { USComponent } from '../u-s/u-s.component';

const routes: Routes = [
  { path:'u-s',component:USComponent},
  { path:'',redirectTo:'u-s',pathMatch:'full'},
  { path:'**',redirectTo:'u-s',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsRoutingModule { }
