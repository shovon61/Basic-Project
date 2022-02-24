import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACComponent } from './modules/admin/a-c/a-c.component';
import { BCComponent } from './modules/basic/b-c/b-c.component';
import { NFComponent } from './modules/notfound/n-f/n-f.component';
import { USComponent } from './modules/user/u-s/u-s.component';
import { TopbarComponent } from './libary/topbar/topbar.component';

import { HttpClientModule } from '@angular/common/http';
import { LCComponent } from './modules/login/l-c/l-c.component'


@NgModule({
  declarations: [
    AppComponent,
    ACComponent,
    BCComponent,
    NFComponent,
    USComponent,
    TopbarComponent,
    LCComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
