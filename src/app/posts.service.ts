import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    console.log(postData);
    this.http
      .post<{ name: string }>(
        'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      }); //** here can send request  */
  }



  fetchPosts() {
  return  this.http.get<{ [key: string]: Post }>('https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json')
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
    
  }
}
