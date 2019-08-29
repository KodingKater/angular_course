import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDataService} from '../book-data.service';
import {Book} from '../book';
import {getErrorMessage} from 'codelyzer/templateAccessibilityElementsContentRule';
import {Subscription} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  bookListe: Book[];
  getSubscriptions: Subscription[];
  errorMessage: string;

  constructor(private bookData: BookDataService) {
    this.getSubscriptions = [];
  }

  ngOnInit() {
    this.getSubscriptions.push(
      this.bookData.getBooks().subscribe(
        (nextBookList) => this.bookListe = nextBookList,
        error => this.errorMessage = error.message));
  }

  ngOnDestroy() {
    this.getSubscriptions.forEach(x => x.unsubscribe());
  }

}
