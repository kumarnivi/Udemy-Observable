import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  ngOnInit() {
    const customIntervalObservable = new Observable<number>((observer) => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);

      // Cleanup logic when the subscription is unsubscribed
      return () => {
        clearInterval(intervalId);
      };
    });

    this.firstObsSubscription = customIntervalObservable.pipe(
      map((data: number) => {
        // Your custom logic here if needed
        return data; // No transformation applied in this example
      })
    ).subscribe(
      data => {
        console.log('Transformed Data:', data);
        // Add your custom logic here to work with the transformed data
        // For example: sendToServer(data), processData(data), etc.
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
