import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-news-letter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss'],
})
export class NewsLetterComponent {

  @Input() show = false;
}
