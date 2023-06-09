import { GlobalStoreModule, addUser, increment, reset } from '@org/global-store';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'org-news-letter',
  standalone: true,
  imports: [CommonModule, GlobalStoreModule],
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss'],

})
export class NewsLetterComponent {
  constructor(private readonly store: Store<{ count: number }>) {
    this.store.dispatch(reset());
  }
  @Input() show = true;
  add(username: string) {
    this.store.dispatch(increment());
  }
}


