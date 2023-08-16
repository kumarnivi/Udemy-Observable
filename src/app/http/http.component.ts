import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  loadedPosts = [];

  constructor(private http: HttpClient) {} //** inject the http client */

  ngOnInit() {
    this.FetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
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
     this.http.get('https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json')  //**no need 2n argument bcz only get the data */
     .pipe(map(responseData => {
      const postArray:any[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postArray.push({responseData, id:key})
        }
       
      }
      return postArray
     }))                                                      //** get some data from map operator */
     .subscribe(responseData => {
      //...
      console.log(responseData)
    })
    
   
  }
}
