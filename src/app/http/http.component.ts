import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent  implements OnInit {
  loadedPosts : Post [] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService : PostsService) {} //** inject the http client */

  ngOnInit() {
   
  }

  onCreatePost(postData: Post ) {
    // Send Http request
    this.postService.createAndStorePost(postData.title,postData.content);
  
  }

  
 onFetchPosts() {
  this.isFetching = true;
  this.postService.fetchPosts().subscribe(posts => {
    this.isFetching = false;
    this.loadedPosts = posts; //** like subscribing */
  });
 }

 onClearPosts() {
  // Send Http request
  this.postService.deletePosts().subscribe(() => {
    this.loadedPosts = []
  })
}


}
