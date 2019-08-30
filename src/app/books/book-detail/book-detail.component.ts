import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookDataService} from '../book-data.service';
import {error} from 'util';
import {Book} from '../book';
import {Observable, Subscription} from 'rxjs';
import {subscribeTo} from 'rxjs/internal-compatibility';
import {flatMap, map, switchMap} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  errorMessage: any;
  subscription: Subscription[];
  isbn: string;
  bookToShow: Book;

  constructor(private router: ActivatedRoute, private service: BookDataService) {
    this.subscription = [];
  }

  ngOnInit() {
    this.subscription.push(this.router.params.pipe(
      map((params: { isbn: string }) => params.isbn),
      flatMap(isbn => this.service.getBookDetailByIsbn(isbn))
    ).subscribe(x => this.bookToShow = x));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

}
