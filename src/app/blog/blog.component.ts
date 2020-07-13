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
  deletePost(i): void{
    if (confirm('Are you sure to delete?')){
    const post = this.posts[i];
    this.postService.deletePost(post.id).subscribe(() => {
      this.posts = this.posts.filter(t => t.id !== post.id);
    });
    }
  }
}
