import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDriveComponent } from './Components/add-drive/add-drive.component';
import { AddPackageComponent } from './Components/add-package/add-package.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RoadMapComponent } from './Components/road-map/road-map.component';
import { ShowDrivesComponent } from './Components/show-drives/show-drives.component';
import { ShowPackagesComponent } from './Components/show-packages/show-packages.component';
import { TrackComponent } from './Components/track/track.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { SendMailComponent } from './Components/send-mail/send-mail.component';


const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"addDrive",component:AddDriveComponent},
{path:"addPackage",component:AddPackageComponent},
{path:"showDrives",component:ShowDrivesComponent},
{path:"showPackages",component:ShowPackagesComponent},
{path:"road_map",component:RoadMapComponent},
{path:"login",component:LoginComponent},
{path:"track", component:TrackComponent},
// {path:"showDrives/:resultsOrigion/:resultsDesttion/:resultsalldrive", component: ShowDrivesComponent}
// {path:"showDrives/:resultsalldrive", component: ShowDrivesComponent}
{path:"showDrives/:package1", component: ShowDrivesComponent},
{path:"track/:drive", component:TrackComponent},
{path:"road_map/:drive", component:RoadMapComponent},
{path:"addUser",component:AddUserComponent},
{path:"updateUser",component:UpdateUserComponent},
{path:"sendMail",component:SendMailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
