import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {
  @Input() userPosts: any[] = [];
  likedPosts: Set<number> = new Set();

  likePost(id: number): void {
    if (this.likedPosts.has(id)) {
      this.likedPosts.delete(id);
    }
    else {
      this.likedPosts.add(id);
    }
  }
}
