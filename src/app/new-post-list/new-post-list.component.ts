import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../modules/post';

@Component({
  selector: 'app-new-post-list',
  templateUrl: './new-post-list.component.html',
  styleUrls: ['./new-post-list.component.css'],
//  providers: [PostService]
})
export class NewPostListComponent implements OnInit {
posts!: Array<any>;
//Traditional way of creating an instance of a service
  // constructor() {
  //   let postService = new PostService();
  //   this.posts = postService.postArray;
  //  }

  constructor(private postService: PostService) {
    this.posts = postService.postArray;
  }

  ngOnInit(): void {
  }
  addNewPost(){
    let newPost: Post = {id: 11, name: 'post 11'};
    this.postService.addPost(newPost);
  }

}
