import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Post } from '../post.model';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  loadedPosts : Post [] = [];
  isFetching = false;

  constructor(private http: HttpClient) {} //** inject the http client */

  ngOnInit() {
    this.FetchPosts();
  }

  onCreatePost(postData: Post ) {
    // Send Http request
    console.log(postData);
    this.http.
    post<{name:string}>(
      'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData)
    }) //** here can send request  */
  }

  onFetchPosts() {
    // Send Http request
    this.FetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private FetchPosts() {
    this.isFetching = false;
    this.http.get<{ [key: string]: Post }>('https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe(posts => {
        // Do something with the retrieved posts
        this.isFetching = false;
        this.loadedPosts = posts;
        
      });
  }

}
