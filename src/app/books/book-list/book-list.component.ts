import { Component, OnInit } from '@angular/core';
import {BookDataService} from '../book-data.service';
import {Book} from '../book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

   bookListe: Book[];

  constructor(private bookData: BookDataService) {
    bookData.getBooks().subscribe((nextBookList) => this.bookListe = nextBookList);
  }

  ngOnInit() {
  }

}
