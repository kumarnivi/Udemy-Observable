import {  Pipe,PipeTransform } from "@angular/core";

@Pipe({  //** must import the pipe decorator */
    name: 'shorten'
  })
export class ShortentPipe implements PipeTransform{

transform(value: any) {
 if (value.legnth > 10) {
    return value.substr(0, 10 ) + '...' //** add a space  */
 }
   return value;
}

}