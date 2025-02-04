import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardVideoComponent } from "./components/card-video/card-video.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardVideoComponent,MenuBarComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Netflix';
}
