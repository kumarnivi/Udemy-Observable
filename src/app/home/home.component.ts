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
  // const customIntervalObservable = Observable.create((observer) => {
  //   let count =0;
  //   setInterval(handler: () => {
  //     observer.next(count)
  //      count++;
  //   }, timeout: 1000);

  // });
  // ** this is new version angulaer code 
  const customIntervalObservable = new Observable((observer) => {
    let count = 0;
    const intervalId = setInterval(() => {
      observer.next(count);
//  ** here when come the count no2 setInterval is completed but error message is not showing
      if(count == 2 ){
        observer.complete();
      }

      // ** for Show an error message **//
      if(count > 3){
        observer.error(new Error('count is greater 3!'))
      }
      count++;
    }, 1000);
  
  })


this.firstObsSubscription =  customIntervalObservable.subscribe(data => {
    console.log(data)
  }, error => {
    console.log(error);
    alert(error.message);
  }, () => {
    console.log('Completed!');
  })

   }

   ngOnDestroy(): void {
     this.firstObsSubscription.unsubscribe();
   }
}
