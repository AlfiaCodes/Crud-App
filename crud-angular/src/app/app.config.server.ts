import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient ,withFetch} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServerRendering(),
    provideHttpClient(
      withFetch()
    ),
    provideAnimations(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
