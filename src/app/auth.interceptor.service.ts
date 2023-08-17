 import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";


export class AuthInteceptorService implements  HttpInterceptor {
 intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(' req is a awy');
    console.log(req.url)
     const modifiedRequest = req.clone(
        {headers: req.headers.append('Auth', 'hxy')
    });
     return next.handle(modifiedRequest).pipe(
        tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Response) {
            console.log(' respons aeeaived , body data')
            console.log(event.body)
        }
     }))
     
 }
}