import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, ROUTES, PreloadAllModules } from '@angular/router';
import {ROUTE } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ArtemisComponent } from './artemis/artemis.component';
import { VrComponent } from './vr/vr.component';
import { SobreComponent } from './sobre/sobre.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtemisComponent,
    VrComponent,
    SobreComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTE,{preloadingStrategy: PreloadAllModules} ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
