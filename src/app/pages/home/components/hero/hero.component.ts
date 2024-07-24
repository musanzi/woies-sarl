import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe, NgIf],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  currentSlide = signal(0);

  images: { imgPath: string }[] = [
    { imgPath: '/images/hero.jpeg' },
    { imgPath: '/images/meeting.jpeg' },
    { imgPath: '/images/hero.jpeg' }
  ];

  activities: { title: string }[] = [
    {
      title: 'Conférences Utajiri'
    },
    {
      title: 'Élevage'
    },
    {
      title: 'Agriculture'
    },
    {
      title: 'Énergie'
    }
  ];
}
