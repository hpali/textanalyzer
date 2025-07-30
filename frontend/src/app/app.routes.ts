import {Routes} from '@angular/router';
import {AnalyzerFormComponent} from './textanalyzer/components/analyzer-form/analyzer-form.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/public/analyzer',
    pathMatch: 'full'
  },
  {
    path: 'public/analyzer',
    component: AnalyzerFormComponent,
  },
];
