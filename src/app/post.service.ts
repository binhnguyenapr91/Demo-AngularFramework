import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPost(count = 10): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }
}
