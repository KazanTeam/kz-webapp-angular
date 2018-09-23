import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalErrorHandler } from './services/global-error-handler';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
