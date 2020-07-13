import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post [] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPost()
      .subscribe(next => (this.posts = next), error => (this.posts = []));
  }

}
