import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post [] = [];
  postForm: FormGroup;
  constructor(private postService: PostService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
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
  onSubmit(): void{
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.createPost(value)
        .subscribe(next => {
          this.posts.unshift(next);
          this.postForm.reset({
            title: '',
            body: ''
          });
        }, error => console.log(error));
    }
  }
}
