import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService implements HttpInterceptor{

  constructor(private customerService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get access_token from localStorage
    const access_token = localStorage.getItem('access_token');

    // Intercept every http request if the token exists
    if (access_token) {
      const cloned = req.clone({
        //  Add token to header of http requst
        headers: req.headers.set('Authorization', 'Bearer '.concat(access_token))
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
