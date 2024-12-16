import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgAvataaarsLibraryModule } from 'ng-avataaars-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarMakerComponent } from './avatar-maker/avatar-maker.component';

@NgModule({
  declarations: [AppComponent, AvatarMakerComponent],
  imports: [BrowserModule, AppRoutingModule, NgAvataaarsLibraryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
