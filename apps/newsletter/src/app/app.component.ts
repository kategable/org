import { Component } from '@angular/core';
import { NewsLetterComponent } from  '@org/news-letter';
@Component({
  standalone: true,
  selector: 'org-newsletter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NewsLetterComponent]
})
export class AppComponent {
  title = 'org';
}
