import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ProductsService } from './services/products.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()),  { provide: ProductsService },]
};
