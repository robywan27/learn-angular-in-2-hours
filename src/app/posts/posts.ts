import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, FormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  @Input() userPosts: any[] = [];
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
