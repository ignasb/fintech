import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionsModel } from '../models';

@Injectable()
export class TransactionsService {
  baseUrl = '/transactions';
  constructor(private http: HttpClient) {}

  getTransactions$(
    search: string
  ): Observable<TransactionsModel.ITransaction[]> {
    if (search) {
      return this.http.get<TransactionsModel.ITransaction[]>(this.baseUrl, {
        params: { search },
      });
    }

    return this.http.get<TransactionsModel.ITransaction[]>(this.baseUrl, {
      params: { search },
    });
  }

  getAvailableSelections$(search: string): Observable<string[]> {
    const selectionsUrl = `${this.baseUrl}/availableSelections`;

    if (search) {
      return this.http.get<string[]>(selectionsUrl, { params: { search } });
    }

    return this.http.get<string[]>(selectionsUrl);
  }
}
