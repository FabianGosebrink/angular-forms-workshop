import { Routes } from '@angular/router';
import { ShowcaseFormControl } from './showcase-form-control/showcase-form-control';
import { ShowcaseFormGroup } from './showcase-form-group/showcase-form-group';
import { ShowcaseFormArray } from './showcase-form-array/showcase-form-array';
import { ShowcaseFormSearch } from './showcase-form-search/showcase-form-search';

export const routes: Routes = [
  {
    path: 'form-control',
    component: ShowcaseFormControl,
  },
  {
    path: 'form-group',
    component: ShowcaseFormGroup,
  },
  {
    path: 'form-array',
    component: ShowcaseFormArray,
  },
  {
    path: 'form-search',
    component: ShowcaseFormSearch,
  },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
