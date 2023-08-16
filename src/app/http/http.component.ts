import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {} //** inject the http client */

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
      'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData)
    })
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
