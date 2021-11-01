import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsManagerComponent } from './comments-manager/comments-manager.component';
import { FirstBuildingComponent } from './first-building/first-building.component';
import { FloorsComponent } from './floors/floors.component';
import { Maps } from './maps/maps.component';


const routes: Routes = [
  { path: 'maps', component: Maps },
  { path: 'firstBuilding', component: FirstBuildingComponent },
  {path: 'floor', component: FloorsComponent},
  {path: 'comments', component: CommentsManagerComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [Maps, FirstBuildingComponent, FloorsComponent];
