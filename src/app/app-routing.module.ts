import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LCComponent } from './modules/login/l-c/l-c.component';
import { NFComponent } from './modules/notfound/n-f/n-f.component';


const routes: Routes = [
  { path:'', redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LCComponent},
  { path:'admin',loadChildren:()=>import('./modules/admin/ad/ad-routing.module').then(m=>m.AdRoutingModule)},
  { path:'basic',loadChildren:()=>import('./modules/basic/bc/bc-routing.module').then(m=>m.BcRoutingModule)},
  { path:'user',loadChildren:()=>import('./modules/user/us/us-routing.module').then(m=>m.UsRoutingModule)},
  { path:'**', component:NFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
