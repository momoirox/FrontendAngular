import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Maps } from './maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstBuildingComponent } from './first-building/first-building.component';

@NgModule({
  declarations: [AppComponent, Maps, FirstBuildingComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
