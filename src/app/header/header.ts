import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit {
  @ViewChild('header') headerElement!: ElementRef;

  ngAfterViewInit(): void {
    /**
 * navbar toggle
 */

    const navOpenBtn = this.headerElement.nativeElement.querySelector("[data-nav-open-btn]");
    const navbar = this.headerElement.nativeElement.querySelector("[data-navbar]");
    const navCloseBtn = this.headerElement.nativeElement.querySelector("[data-nav-close-btn]");
    const overlay = this.headerElement.nativeElement.querySelector("[data-overlay]");

    const elemArr = [navCloseBtn, overlay, navOpenBtn];

    for (let i = 0; i < elemArr.length; i++) {
      elemArr[i]?.addEventListener("click", function () {
        navbar?.classList.toggle("active");
        overlay?.classList.toggle("active");
      });
    }

    /**
     * toggle navbar & overlay when click any navbar-link
     */

    const navbarLinks = this.headerElement.nativeElement.querySelectorAll("[data-navbar-link]");

    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].addEventListener("click", function () {
        navbar?.classList.toggle("active");
        overlay?.classList.toggle("active");
      });
    }





    /**
     * header & go-top-btn active
     * when window scroll down to 400px
     */
    if (typeof window !== 'undefined') {
      const header = this.headerElement.nativeElement;
      // const goTopBtn = this.headerElement.nativeElement.querySelector("[data-go-top]");
  
      window.addEventListener("scroll", function () {
        if (window.scrollY >= 400) {
          header?.classList.add("active");
          // goTopBtn?.classList.add("active");
        } else {
          header?.classList.remove("active");
          // goTopBtn?.classList.remove("active");
        }
      });
    }
  }

}
