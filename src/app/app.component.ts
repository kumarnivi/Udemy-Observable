import { Component , OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private activatedSubscription!: Subscription;
userActivated = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      didActivated => {
        this.userActivated = didActivated;
      }
    );
  }
}
