import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MostreComponent,NavBarComponent,HomeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'museo';
}
