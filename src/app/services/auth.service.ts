import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  login(usersName: string, usersPass: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/login`,
      { usersName, usersPass },
      { 
        headers: this.getHeaders(),
        withCredentials: true
      }
    ).pipe(
      tap(response => {
        console.log('Resposta do login:', response);
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          
          if (response.usersRole === 'ADMIN') {
            console.log('Redirecionando para dashboard admin');
            this.router.navigate(['/admin/dashboard']);
          } else {
            console.log('Redirecionando para dashboard normal');
            this.router.navigate(['/dashboard']);
          }
        }
      }),
      catchError(error => throwError(() => error))
    );
  }

  register(usersName: string, usersPass: string, token: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register`,
      { usersName, usersPass, token },
      { 
        headers: this.getHeaders(),
        withCredentials: true
      }
    ).pipe(
      catchError(error => throwError(() => error))
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  isAdmin(): boolean {
    const user = this.getUser();
    return user ? user.usersRole === 'ADMIN' : false;
  }
}
