import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable} from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstObsSubscription!: Subscription
  

   ngOnInit() {
    //  interval(periond: 1000).subscribe(next :count => {
    //   console.log(count);
    //  }) //**this is not work in angular16 */
    
  // this.firstObsSubscription =  interval(1000).subscribe(count => {
  //     console.log(count);
  //   }); //**this is auto obsovable */

  // ! custom Observable ! //
  const customIntervalObservable = Observable.create((observer) => {
    let count =0;
    setInterval(handler: () => {
      observer.next(count)
       count++;
    }, timeout: 1000);

  });

this.firstObsSubscription =  customIntervalObservable.subscribe(data => {
    console.log(data)
  });
   }
   ngOnDestroy(): void {
     this.firstObsSubscription.unsubscribe();
   }
}
