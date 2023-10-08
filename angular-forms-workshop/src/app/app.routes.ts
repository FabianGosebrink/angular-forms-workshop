import { Routes } from '@angular/router';
import { SimpleFormSearchComponent } from 'src/app/simple-form-search/simple-form-search.component';
import { SimpleFormArrayComponent } from './simple-form-array/simple-form-array.component';
import { SimpleFormControlComponent } from './simple-form-control/simple-form-control.component';
import { SimpleFormGroupComponent } from './simple-form-group/simple-form-group.component';
import { StartComponent } from './start/start.component';

export const APP_ROUTES: Routes = [
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'form-control',
    component: SimpleFormControlComponent,
  },
  {
    path: 'form-group',
    component: SimpleFormGroupComponent,
  },
  {
    path: 'form-array',
    component: SimpleFormArrayComponent,
  },
  {
    path: 'form-search',
    component: SimpleFormSearchComponent,
  },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
