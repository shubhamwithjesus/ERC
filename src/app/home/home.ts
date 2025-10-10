import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Corousel } from '../corousel/corousel';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, Corousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public yearsSince2007: number;

  constructor() {
    this.yearsSince2007 = new Date().getFullYear() - 2007;
  }
}
