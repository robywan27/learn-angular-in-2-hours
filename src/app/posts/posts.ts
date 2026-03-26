import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule, ReversePipe],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.fetchPosts().subscribe(posts => this.userPosts = posts);
  }

  userPosts: any[] = [];
  likedPosts: Set<number> = new Set();
  newComment: string = '';

  likePost(id: number): void {
    if (this.likedPosts.has(id)) {
      this.likedPosts.delete(id);
    }
    else {
      this.likedPosts.add(id);
    }
  }

  addComment(postId: number): void {
    const post = this.userPosts.find(p => p.id === postId);
    if (post && this.newComment.trim()) { // check post is not undefined before checking if new comment is not empty
      post.comments.push(this.newComment);
      this.newComment = '';
    }
  }
}
