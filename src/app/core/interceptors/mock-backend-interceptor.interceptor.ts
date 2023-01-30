import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { mockedProfileData } from './mocked-backend-interceptor.const';

@Injectable()
export class MockBackendInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.handleRequest(request, next);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = req;

    if (url.endsWith('/profile') && method === 'GET') {
      return of(
        new HttpResponse({ status: 200, body: mockedProfileData })
      ).pipe(delay(1000));
    }
  }
}

export let mockBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptorInterceptor,
  multi: true,
};
