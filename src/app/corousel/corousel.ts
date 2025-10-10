import { Component } from '@angular/core';

@Component({
  selector: 'app-corousel',
  imports: [],
  templateUrl: './corousel.html',
  styleUrl: './corousel.scss'
})
export class Corousel {
  images = [
    'images/blog-1.jpg',
    'images/blog-2.jpg'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

