import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';

export interface Credentials {
  name: string;
  token: string;
}

export interface LoginContext {
  id: string;
  password: string;
}

export interface ApiResponse {
  ok: number;
  data?: any;
  info?: any;
}
const credentialsKey = 'credentials';

const routes = {
  login: () => `/auth/klra/func/admin_login`
};
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  private _credentials: Credentials | null;
  private jwtUserData: any;
  constructor(private httpClient: HttpClient) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
      if (this._credentials && this._credentials.token) {
        this.jwtUserData = jwtDecode(this._credentials.token);
        localStorage.setItem('token', this._credentials.token);
      }
    }
  }

  /**
   * Authenticates the user.
   * @param {LoginContext} context The login parameters.
   * @return {Observable<Credentials>} The user credentials.
   */
  login(context: LoginContext): Observable<ApiResponse> {
    return this.httpClient.post(routes.login(), context).pipe(
      map((body: any) => {
        if (body && body.ok === 1) {
          this.setCredentials(body.data);
        }
        return body;
      }),
      catchError(() => of('Error, could not connect server :-('))
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    if (this.credentials && this.credentials.token && this.jwtUserData) {
      if (!this.jwtUserData.hasOwnProperty('exp')) {
        return false;
      }
      const date = new Date(0);
      date.setUTCSeconds(this.jwtUserData.exp);
      if (date.valueOf() > new Date().valueOf() && this.jwtUserData.role === 'admin') {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember True to remember credentials across sessions.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials && credentials.token) {
      const storage = localStorage;
      this.jwtUserData = jwtDecode(credentials.token);

      storage.setItem('token', credentials.token);
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
}
