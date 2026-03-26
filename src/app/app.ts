import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Navigation } from "./navigation/navigation";


@Component({
  selector: 'app-root',
  imports: [RouterModule, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
