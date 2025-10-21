import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  images: any[] = [
    { id: 1, imageUrl: 'images/erc/church_drone_img.png', title: 'Summer Trip', date: new Date('2025-06-15') },
    { id: 2, imageUrl: 'images/erc/church_drone_img.png', title: 'Birthday Bash', date: new Date('2025-01-20') },
    { id: 3, imageUrl: 'images/erc/church_drone_img.png', title: 'Mountain Hike', date: new Date('2024-11-03') },
    { id: 4, imageUrl: 'images/erc/church_drone_img.png', title: 'City Lights', date: new Date('2025-06-01') },
    // Add more images...
  ];

  constructor() { }

  ngOnInit(): void {
    // Optionally sort the images, e.g., by most recent first
    this.images.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  // Helper function to format month and year
  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${year}`;
  }
}
