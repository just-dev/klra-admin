import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Machinary } from '@app/shared/models';

const routes = {
  list: () => `/api/machinaries`,
  add: () => `/api/machinaries`,
  update: (id: string) => `/api/machinary/${id}`,
  delete: (id: string) => `/api/machinary/${id}`
};

export interface ApiResponse {
  ok: number;
  data: any;
}

@Injectable()
export class MachinaryService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ApiResponse> {
    return this.httpClient.get(routes.list()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load machinary :-('))
    );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.httpClient.delete(routes.delete(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load machinary :-('))
    );
  }

  update(id: string, machinary: Machinary): Observable<ApiResponse> {
    return this.httpClient
      .cache()
      .put(routes.update(id), machinary)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load machinary :-('))
      );
  }

  add(machinary: Machinary): Observable<ApiResponse> {
    return this.httpClient
      .cache()
      .post(routes.add(), machinary)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load machinary :-('))
      );
  }
}
