import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';
import { ApplicationConfig, inject, isDevMode, LOCALE_ID, provideAppInitializer, provideBrowserGlobalErrorListeners, } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { routes } from './app.routes';
import { CatalogRepository } from './core/repositories/catalog.repository';
import { CommunityRepository } from './core/repositories/community.repository';
import { BackendStatusService } from './core/services/backend-status.service';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAppInitializer(() => {
      const backend = inject(BackendStatusService);
      const catalog = inject(CatalogRepository);
      const community = inject(CommunityRepository);
      return backend.probe().then(() => Promise.all([catalog.load(), community.load()]));
    }),
  ],
};
