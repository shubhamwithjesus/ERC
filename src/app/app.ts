import { Component, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Meetings } from './meetings/meetings';
import { Doctrine } from './doctrine/doctrine';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Meetings, Doctrine, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ERC');
}
