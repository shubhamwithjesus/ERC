import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @ViewChild('header') headerElement!: ElementRef;

  isHomeRoute: boolean = false;

  isNavOpen: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isHomeRoute = this.router.url === '/'; // Adjust '/' to your home route path if different
      });
  }
 
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
