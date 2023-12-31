import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, throwError } from 'rxjs';
import { catchError, map,tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<String>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    console.log(postData);
    this.http
      .post<{ name: string }>(
        'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      ); //** here can send request  */
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Coustom-Header': 'hello' }),
          params: searchParams,
          responseType: 'json'
        }
      ) //** add ea request Header as a 2nd argument */
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorRes) => {
          // ** send to analytics server error
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://backend-setup-7f3ed-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text' //** get the console after clear the data */
      }
    ).pipe(tap(event => {
      console.log(event)
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body)
      }
    }))
  }
}
