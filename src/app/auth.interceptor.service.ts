 import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs";

export class AuthInteceptorService implements  HttpInterceptor {
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
     const modifiedRequest = req.clone(
        {headers: req.headers.append('Auth', 'hxy')
    });
     return next.handle(modifiedRequest)
     
 }
}