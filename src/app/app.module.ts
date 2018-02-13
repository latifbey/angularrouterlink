import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRouteModule } from './app.route';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HaberComponent } from './haber/haber.component';
import { DuyurularComponent } from './duyurular/duyurular.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HaberComponent,
    DuyurularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
