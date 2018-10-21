import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newHeaders = request.headers;
    const token = localStorage.getItem('token');
    if (token) {
      newHeaders = newHeaders.set('Authorization', `Bearer ${token}`);
    }
    request = request.clone({ url: environment.authEndPoint + request.url, headers: newHeaders });
    return next.handle(request);
  }
}
