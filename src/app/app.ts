import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Posts } from './posts/posts';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Posts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  posts = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Bla bla chocolade vla!',
      comments: ['Wat stom!', 'Zo vervelend']
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Japan here I come!',
      comments: ['Enjoy!', 'Super!']
    }
  ]
}
