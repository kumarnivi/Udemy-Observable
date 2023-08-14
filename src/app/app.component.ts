import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {  // Implement OnDestroy
  private activatedSubscription!: Subscription; //** for onDestroy */
  userActivated = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      (didActivated: boolean) => {  // Make sure the type matches
        this.userActivated = didActivated;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }
}
