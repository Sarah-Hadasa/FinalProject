import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { AddDriveComponent } from './Components/add-drive/add-drive.component';
import { AddPackageComponent } from './Components/add-package/add-package.component';
import { LoginComponent } from './Components/login/login.component';
import { ShowDrivesComponent } from './Components/show-drives/show-drives.component';
import { ShowPackagesComponent } from './Components/show-packages/show-packages.component';
import { RoadMapComponent } from './Components/road-map/road-map.component';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './Components/track/track.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { SendMailComponent } from './Components/send-mail/send-mail.component';
import { ShowMyDriveComponent } from './Components/show-my-drive/show-my-drive.component';
// import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
// import { SearchTrackComponent } from './Components/search-track/search-track.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddDriveComponent,
    AddPackageComponent,
    LoginComponent,
    ShowDrivesComponent,
    ShowPackagesComponent,
    RoadMapComponent,
    TrackComponent,
    AddUserComponent,
    SendMailComponent,
    UpdateUserComponent,
    ShowMyDriveComponent
    // SearchTrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
