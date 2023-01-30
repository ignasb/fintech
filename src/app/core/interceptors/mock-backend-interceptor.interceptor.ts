import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import {
  mockedProfileData,
  mockedTransactions,
} from './mocked-backend-interceptor.const';
import { TransactionsModel } from '../models';

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

    if (url.endsWith('/profile')) {
      if (method === 'GET') {
        return of(
          new HttpResponse({ status: 200, body: mockedProfileData })
        ).pipe(delay(1000));
      }

      if (method === 'PUT') {
        return of(
          new HttpResponse({
            status: 200,
            body: { ...mockedProfileData, ...req.body },
          })
        ).pipe(delay(1000));
      }
    }

    if (url.endsWith('/transactions')) {
      const searchStr = req.params.get('search');
      let response: TransactionsModel.ITransaction[] = mockedTransactions;

      if (searchStr) {
        response = getFilteredTransactions(searchStr);
      }

      if (method === 'GET') {
        return of(new HttpResponse({ status: 200, body: response }));
      }
    }

    if (url.includes('/transactions/availableSelections')) {
      const searchStr = req.params.get('search');
      let response: string[] = [];

      if (searchStr) {
        response = getTransactionsSuggestion(searchStr);
      }

      if (method === 'GET') {
        return of(
          new HttpResponse({
            status: 200,
            body: response,
          })
        );
      }
    }

    if (url.endsWith('/login')) {
      if (method === 'POST') {
        return of(
          new HttpResponse({ status: 200, body: mockedProfileData })
        ).pipe(delay(1000));
      }
    }
  }
}

export let mockBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptorInterceptor,
  multi: true,
};

function getTransactionsSuggestion(searchStr: string): string[] {
  const uniqueCompanies: string[] = [];

  mockedTransactions.forEach(({ companyName }) => {
    if (uniqueCompanies.indexOf(companyName) === -1) {
      uniqueCompanies.push(companyName);
    }
  });

  return uniqueCompanies.filter((name) =>
    name.toLowerCase().includes(searchStr.toLocaleLowerCase())
  );
}

function getFilteredTransactions(
  searchStr: string
): TransactionsModel.ITransaction[] {
  return mockedTransactions.filter((mt) =>
    mt.companyName.toLowerCase().includes(searchStr.toLowerCase())
  );
}
