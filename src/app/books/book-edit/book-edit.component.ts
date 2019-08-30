import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookDataService} from '../book-data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book;
  subscription: Subscription[];

  constructor(private router: ActivatedRoute, private service: BookDataService) {
    this.book = {abstract: '', author: '', isbn: '', numPages: 0, publisher: {name: '', url: ''}, subtitle: '', title: ''};
    this.subscription = [];
  }

  ngOnInit() {
    this.subscription.push(this.router.params.pipe(
      map((params: { isbn: string }) => params.isbn),
      flatMap(isbn => this.service.getBookDetailByIsbn(isbn))
    ).subscribe(x => this.book = x));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe());
  }

  save(value: any) {
    console.log(value);
  }
}
