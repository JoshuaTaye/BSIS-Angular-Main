import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const donorsRoutes: Routes = [
  {path: '',
    component: HomeComponent
  },
  {
    path: 'find-duplicates',
    loadComponent: () =>
      import ('./components/find-duplicates/find-duplicates.component').then(c => c.FindDuplicatesComponent)
  },
  // {
  //   path: 'blood-component-list',
  //   loadComponent: () =>
  //     import('./components/blood-components-list/blood-components-list.component').then(c => c.BloodComponentsListComponent)
  // },
]
