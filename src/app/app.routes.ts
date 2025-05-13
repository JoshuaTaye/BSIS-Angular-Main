import { Routes } from '@angular/router';
import {HomePageComponent} from './core/components/home-page/home-page.component';
import {HomeComponent} from './donors/components/home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent,
    // children: [
    //   {
    //     path: 'donors',
    //     loadChildren: () =>
    //       import('./donors/donors.routes').then(r => r.donorsRoutes)
    //   },
    // ]
  },
  {
    path: 'donors', component: HomeComponent,
  }
];
