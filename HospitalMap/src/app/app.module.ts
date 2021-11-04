import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Maps } from './maps/maps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstBuildingComponent } from './first-building/first-building.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FloorsComponent } from './floors/floors.component';
import { RoomInfoComponent } from './room-info/room-info.component';
import { CommentsManagerComponent } from './comments-manager/comments-manager.component';
import { StarComponent } from './shared/star.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, Maps, FirstBuildingComponent, FloorsComponent, RoomInfoComponent, CommentsManagerComponent,StarComponent, HomePageComponent],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
