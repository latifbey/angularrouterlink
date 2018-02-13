import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { HaberComponent } from './haber/haber.component';
import { DuyurularComponent } from './duyurular/duyurular.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'content', component: ContentComponent,
    children: [
        { path: '', redirectTo: 'content', pathMatch: 'full' },
        { path: 'haber', component: HaberComponent },
        { path: 'duyuru', component: DuyurularComponent,
        children: [
            { path: '', redirectTo: 'contactus', pathMatch: 'full' },
            { path: 'haber', component: HaberComponent },
            { path: 'duyuru', component: DuyurularComponent },
            { path: 'home', component: HomeComponent}
          ]
    }
      ]
     },
    { path: 'aboutus', component: AboutComponent,
    children: [
        { path: '', redirectTo: 'aboutus', pathMatch: 'full' },
        { path: 'haber', component: HaberComponent },
        { path: 'duyuru', component: DuyurularComponent },
        { path: 'home', component: HomeComponent}
      ]
 },
    { path: 'contactus', component: ContactComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],

})
export class AppRouteModule { }