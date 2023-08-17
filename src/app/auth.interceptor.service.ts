 import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


export class AuthInteceptorService implements  HttpInterceptor {
 intercept(req: HttpRequest<any>, next: HttpHandler) {
     
    console.log(' req is a awy');
     return next.handle(req);
     
 }
}