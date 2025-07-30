import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import Lara from "@primeng/themes/lara";
import {environment} from '../environments/environment';
import {BASE_PATH} from './core/generated-api';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    providePrimeNG({
      theme:{preset:Lara}
    }),
    {
      provide: BASE_PATH,
      useValue: environment.apiBaseUrl,
    },importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
     ),

  ],
};
