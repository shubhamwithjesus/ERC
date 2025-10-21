import { Component, HostListener } from '@angular/core';

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
  isModalOpen: boolean = false;
  selectedImage: any | null = null;

  constructor() { }

  ngOnInit(): void {
    this.images.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${year}`;
  }

  // --- NEW METHODS FOR MODAL ---
  openImageModal(item: any): void {
    this.selectedImage = item;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeImageModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Listen for the Escape key to close the modal
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: Event) {
    if (this.isModalOpen) {
      this.closeImageModal();
    }
  }
}
