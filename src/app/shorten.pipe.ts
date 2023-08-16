import {  Pipe,PipeTransform } from "@angular/core";

@Pipe({  //** must import the pipe decorator */
    name: 'shorten'
  })
export class ShortentPipe implements PipeTransform{

transform(value: any , limit:number) {
 if (value.length > limit) {
    return value.substr(0, limit ) + '...' //** add a space  */
 }
   return value;
}

}
